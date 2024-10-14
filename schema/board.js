import { defineField, defineType } from "sanity";

export default defineType({
  name: "board",
  title: "Board",
  type: "document",
  fields: [
    defineField({
		name: "members",
		title: "Board Members",
		type: "array",
      	description: "Profiles for each member of the board.",
		options: { sortable: true },
		of: [{
			type: "object",
			fields: [
				{
					type: "image",
					name: "photo",
					title: "Width (in pixels)",
					options: { hotspot: true, },
					fields: [
						{
							type: "number",
							name: "width",
							title: "Width (in pixels)"
						},
						{
							type: "number",
							name: "height",
							title: "Height (in pixels)"
						}
					]
				},
				{
					type: "string",
					name: "name",
					title: "Name",
				},
				{
					type: "string",
					name: "title",
					title: "Title",
				},
				{
					type: "string",
					name: "email",
					title: "Email Address",
				},
			],
		preview: {
			select: {
				title: "name",
				media: "photo",
			}
		}}],
	}),
  ],
  preview: {
	select: {
		title: "title",
	},
	prepare() {
		return {
			title: "Board Page Content",
		};
	}},
});
