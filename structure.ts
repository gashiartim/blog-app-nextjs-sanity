import Iframe from "sanity-plugin-iframe-pane";

import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: "http://localhost:3000/",
          defaultSize: "desktop",
          reload: { button: true },
          attribute: {},
        })
        .title("Preview"),
    ]);
  }
};
