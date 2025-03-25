// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'QWQ',
			social: {
				github: 'https://github.com/AutumnBirch',
				youtube: 'https://space.bilibili.com/1731000601'
			},
			sidebar: [
				{
					label:'开篇文档',
					slug:'start-doc',
				},
				{
					label: '教程&经验',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '引言', slug: 'guides/foreword' },
						{ label: '基础教程',autogenerate: { directory: 'guide' } },
						// { label: '有关复盘', slug: 'guides/review' },
						{ label: '经验之谈',autogenerate: { directory: 'experience' } },

					],
				},
				{
					label: '碎碎念',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
