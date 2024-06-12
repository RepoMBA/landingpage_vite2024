
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import App from "./App";

export function render(url, context) {
  const appHtml = renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  return { appHtml, helmet };
}
