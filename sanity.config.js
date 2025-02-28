// Different environments use different variables
const projectId =
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID ||
  import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset =
  import.meta.env.PUBLIC_SANITY_STUDIO_DATASET ||
  import.meta.env.PUBLIC_SANITY_DATASET;
// Feel free to remove this check if you don't need it
if (!projectId || !dataset) {
  throw new Error(
    `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
      import.meta.env,
      null,
      2,
    )}`,
  );
}
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import {HomeIcon} from '@sanity/icons';
import {BlockContentIcon} from '@sanity/icons';
import {UsersIcon} from '@sanity/icons';
import {ArchiveIcon} from '@sanity/icons';
export default defineConfig({
  name: "kenilworth-park",
  title: "Kenilworth Park",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
            .title("Home")
            .icon(HomeIcon)
            .child(
              S.document()
              .schemaType("home")
              .documentId("home")
            ),
            S.listItem()
            .title("History")
            .icon(BlockContentIcon)
            .child(
              S.document()
              .schemaType("history")
              .documentId("history")
            ),
            S.listItem()
            .title("Board")
            .icon(UsersIcon)
            .child(
              S.document()
              .schemaType("board")
              .documentId("board")
            ),
            orderableDocumentListDeskItem({
              type: "resource",
              title: "Resources",
              icon: ArchiveIcon,
              menuItems: [],
              S,
              context,
            }),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  "home",
                  "history",
                  "board",
                  "resource",
                ].includes(listItem.getId() ?? "default")
            ),
          ]),
    }),
    // visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
