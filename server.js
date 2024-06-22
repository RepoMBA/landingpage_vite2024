import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: "ssr" },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

      const { appHtml, helmet } = render(url);

      const html = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              #root { display: none; }
            </style>
           
          </head>
          <body>
            <div id="root">${appHtml}</div>
            <script type="module" src="/src/entry-client.tsx"></script>
            <script>
              document.addEventListener("DOMContentLoaded", function() {
                document.getElementById("root").style.display = "block";
              });
            </script>
          </body>
        </html>
        `;

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
  });
}

createServer();
