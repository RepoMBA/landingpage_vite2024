const express = require('express');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const fs = require('fs');
const path = require('path');
const { createServer: createViteServer } = require('vite');
const React = require('react');
const { HelmetProvider } = require('react-helmet-async');
const App = require('../src/App').default;
const AmpHome = require('../src/pages/AmpHome').default;

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    const isAmp = req.query.amp === '1';

    let template;
    try {
      const templatePath = isAmp
        ? path.resolve(__dirname, 'template-amp.html')
        : path.resolve(__dirname, 'template.html');
      template = fs.readFileSync(templatePath, 'utf-8');
      template = await vite.transformIndexHtml(url, template);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
      return;
    }

    try {
      const helmetContext = {};
      const appHtml = renderToString(
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            {isAmp ? <AmpHome /> : <App />}
          </StaticRouter>
        </HelmetProvider>
      );

      const { helmet } = helmetContext;
      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--title-->`, helmet.title.toString())
        .replace(`<!--meta-->`, helmet.meta.toString() + helmet.link.toString() + helmet.script.toString());

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
}

createServer();
