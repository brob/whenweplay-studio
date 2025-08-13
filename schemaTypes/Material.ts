import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'material',
    title: 'Material',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isInInventory',
            title: 'Is In Inventory',
            type: 'boolean',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'boxArt',
            title: 'Box Art',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            options: {
                layout: 'grid',
            },
            description: 'Additional images for the material',

        }),
        defineField({
            name: 'youtubeVideoId',
            title: 'YouTube Video ID',
            type: 'string',
            description: 'ID of a YouTube video related to the material',

        }),
        defineField({
            name: 'available',
            title: 'Is Available',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'htmlDescription',
            title: 'HTML Description',
            type: 'text',
            description: 'HTML formatted description for the material',
        }),
        defineField({
            name: 'adminNotes',
            title: 'Admin Notes',
            type: 'text',
            description: 'Notes for internal use only',
        }),
        defineField({
            name: 'categoryString',
            title: 'Category String',
            type: 'string',

        }),
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'string',
        }),
        defineField({
            name: 'msrp',
            title: 'MSRP',
            type: 'number',
            validation: (Rule) => Rule.min(0).precision(2),
        }),
        defineField({
            name: 'age',
            title: 'Recommended Age',
            type: 'string',
        }),
        defineField({
            name: 'itemType',
            title: 'Item Type',
            type: 'string'
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'materialCategory' }] }],
        }),
    ],
});
