import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
	}),
});

const notes = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// Notes are evergreen; date is optional and only used for ordering.
		date: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(['active', 'paused', 'done']).default('active'),
		date: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog, notes, projects };
