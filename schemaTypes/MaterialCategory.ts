import { defineType } from 'sanity';

export default defineType({
    name: 'materialCategory',
    title: 'Material Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
});