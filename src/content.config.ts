import { defineCollection, z } from 'astro:content';
import { glob } from 'astro:content/loaders';

const pagesCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './src/content/pages' 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroText: z.string()
  })
});

export const collections = {
  'pages': pagesCollection,
};