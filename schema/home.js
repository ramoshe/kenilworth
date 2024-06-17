import { defineField, defineType } from "sanity";
export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "welcome",
      title: "Welcome Message",
      type: "text",
      description: "Text content that appears on the home page."
    }),
    defineField({
			name: "images",
			title: "Neighborhood Images",
			type: "array",
      description: "Images that will be chosen from at random to appear when a user loads the site.",
			options: { layout: "grid" },
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
					fields: [
						{
							type: "number",
							name: "width",
							title: "Width (in pixels)",
						},
						{
							type: "number",
							name: "height",
							title: "Height (in pixels)",
						},
					],
				},
			],
		}),
  ],
  preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "Home Page Content",
			};
		},
	},
});
