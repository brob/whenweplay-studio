import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'box',
    title: 'Box',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'materials',
            title: 'Materials',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'material' }] }],
        }),
    ]
})