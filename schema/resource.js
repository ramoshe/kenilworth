import { defineField, defineType } from "sanity";
export default defineType({
  name: "resource",
  title: "Resources",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Title",
      type: "string",
    }),
    defineField ({
      name: "cards",
      title: "Cards",
      type: "array",
      options: { sortable: true },
		  of: [{
        type: "object",
        fields: [
          {
            name: "identifier",
            title: "Identifier",
            type: "string"
          },
          {
            name: "content",
            title: "Contents",
            type: "blockContent",
          },
        ]
      }],
      preview: {
        select: {
          title: "identifier",
        },
      },
    }),
    defineField({
      name: "orderRank",
      title: "Order",
      type: "string",
      hidden: true,
      initialValue: "0|100000:",
    }),
  ],
});