import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'program',
    title: 'Program',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'length',
            title: 'Length in hours',
            type: 'number'
        }),
        defineField({
            name: 'facilities',
            title: 'Facility needs',
            type: 'text'
        }),
        defineField({
            name: 'quantity',
            type: 'number'
        }),
        defineField({
            name: 'audience',
            title: 'Audience',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: ['Preschool', 'Children', 'Tweens', 'Teens', 'Adults', 'Families']
            }
        })
]})