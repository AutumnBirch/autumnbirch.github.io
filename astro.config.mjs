// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'QWQ',
			social: {
				github: 'https://github.com/AutumnBirch',
				youtube: 'https://space.bilibili.com/1731000601'
			},
			plugins: [ // ✅ 正确插件加载位置
				starlightGiscus({
				  repo: 'AutumnBirch/autumnbirch.github.io',
				  repoId: 'R_kgDOOBUM_Q',
				  category: 'General',
				  categoryId: 'DIC_kwDOOBUM_c4Coie2'
				})
			],
			sidebar: [
				{
					label:'开篇文档',
					slug:'start-doc',
				},
				{
					label: '教程&经验',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '引言', slug: 'start/foreword' },
						{ label: '基础教程',autogenerate: { directory: 'guides' } },
						// { label: '有关复盘', slug: 'guides/review' },
						{ label: '经验之谈',autogenerate: { directory: 'experience' } },

					],
				},
				{
					label: '碎碎念&其他',
					autogenerate: { directory: 'other' },
				},
			],
		}),
	],
});
