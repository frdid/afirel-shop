import { defineCollection, z } from 'astro:content';

const productCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    originalPrice: z.number().optional(),
    category: z.string(),
    brand: z.string(),
    inStock: z.boolean().default(true),
    featured: z.boolean().default(false),
    badge: z.string().optional(),
    images: z.array(z.object({
      url: z.string(),
      alt: z.string(),
    })),
    specifications: z.record(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    rating: z.number().min(0).max(5).optional(),
    reviewCount: z.number().default(0),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    featured: z.boolean().default(false),
    readTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'products': productCollection,
  'blog': blogCollection,
};