import { defineField, defineType } from "sanity";
import {BlockContentIcon} from '@sanity/icons';

export default defineType({
  name: "history",
  title: "History",
  type: "document",
  fields: [
    defineField({
      name: "content",
      title: "Content Sections",
      type: "array",
      sortable: true,
      of: [{
        type: "object",
        icon: BlockContentIcon,
        fields: [
          {
            name: "sectionTitle",
            type: "string",
            title: "Section Title"
          },
          {
            name: "sectionText",
            type: "blockContent",
            title: "Section Text"},
        ]
      }]
    }),
  ],
  preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "History Page Content",
			};
		},
	},
});
