import { apiPlugin, type ISbResult, type ISbStoryData, storyblokInit } from '@storyblok/js';
import * as dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const PUBLIC_STORYBLOK_TOKEN = process.env.PUBLIC_STORYBLOK_TOKEN?.trim();

if (!PUBLIC_STORYBLOK_TOKEN) {
  // Static mode: generate minimal sitemap from mock pages
  const baseUrl = process.env.SITE_URL || 'https://insyd.in';
  const slugs = [
    '',
    'about',
    'projects',
    'projects/unmesa',
    'projects/project-two',
    'services',
    'contacts',
    'blog'
  ];
  const entries = slugs
    .map((slug) => ({
      loc: slug ? `${baseUrl}/${slug}` : baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly' as const,
      priority: slug === '' ? 1 : 0.8
    }))
    .map(
      (e) => `    <url>
      <loc>${e.loc}</loc>
      <lastmod>${e.lastmod}</lastmod>
      <changefreq>${e.changefreq}</changefreq>
      <priority>${e.priority}</priority>
    </url>`
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries}
  </urlset>`;
  fs.writeFileSync('static/sitemap.xml', xml);
  console.log('Generated static sitemap (no Storyblok token)');
  process.exit(0);
}

const { storyblokApi } = storyblokInit({
  accessToken: PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    https: true
  }
});

const storyblok = storyblokApi as NonNullable<ReturnType<typeof storyblokInit>['storyblokApi']>;

type SitemapEntry = {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

async function main() {
  const perPage = 100;
  const requests: Promise<ISbResult>[] = [];

  const initial = await storyblok.get('cdn/stories', {
    cv: Date.now(),
    excluding_fields: 'body,page',
    per_page: 1,
    page: 1
  });

  const totalPages = Math.ceil(initial.total / perPage);

  for (let i = 1; i <= totalPages; i++) {
    requests.push(
      storyblok.get('cdn/stories', {
        cv: Date.now(),
        excluding_fields: 'body,page',
        per_page: perPage,
        page: i
      })
    );
  }

  const responses = await Promise.all(requests);

  /**
   * create entries using:
   *   loc: `https://insyd.in${story.full_slug}`
   *   lastmod: story.published_at
   *
   * and the following values:
   *
   * blog post
   *   changeFreq: 'yearly'
   *   priority: 0.7
   *
   * career
   *   changeFreq: 'monthly'
   *   priority: 0.7
   *
   * handbook
   *   changeFreq: 'monthly'
   *   priority: 0.7
   *
   * project
   *   changeFreq: 'monthly'
   *   priority: 0.8
   *
   * team-member
   *   changeFreq: 'yearly'
   *   priority: 0.4
   *
   * page
   *   changeFreq: story.content.change_frequency
   *   priority: story.content.priority
   */

  const entries: SitemapEntry[] = responses.reduce<SitemapEntry[]>((acc, response) => {
    return acc.concat(
      response.data.stories
        .filter((story: ISbStoryData) => {
          // filter entries that are not one of the types we want
          return (
            story.content.component === 'blog-post' ||
            story.content.component === 'career' ||
            story.content.component === 'page' ||
            story.content.component === 'project' ||
            story.content.component === 'team-member' ||
            story.content.component === 'handbook' ||
            story.content.component === 'landing-page'
          );
        })
        .map((story: ISbStoryData) => {
          const entry: SitemapEntry = {
            loc:
              story.slug === 'home'
                ? 'https://insyd.in'
                : `https://insyd.in/${story.full_slug.replace(/\/$/, '')}`,
            lastmod: story.published_at || new Date().toISOString(),
            changefreq: 'monthly',
            priority: 0.7
          };

          if (story.content.component === 'page') {
            entry.changefreq = story.content.change_frequency;
            entry.priority = story.content.priority;
          }

          if (story.content.component === 'blog-post') {
            entry.changefreq = 'yearly';
            entry.priority = 0.7;
          }

          if (story.content.component === 'team-member') {
            entry.changefreq = 'yearly';
            entry.priority = 0.4;
          }

          if (story.content.component === 'project') {
            entry.priority = 0.8;
          }

          return entry;
        })
    );
  }, []);

  // build a ../static/sitemap.xml file
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${entries
      .map(
        (entry) => `
    <url>
      <loc>${entry.loc}</loc>
      <lastmod>${entry.lastmod}</lastmod>
      <changefreq>${entry.changefreq}</changefreq>
      <priority>${entry.priority}</priority>
    </url>
  `
      )
      .join('')}
  </urlset>`;
  fs.writeFileSync('static/sitemap.xml', xml);
}

main();
