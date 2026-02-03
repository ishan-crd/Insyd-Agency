/**
 * Static mock content for running without Storyblok.
 * Edit this file to customize your agency website.
 */

import type { ISbStoryData } from '@storyblok/js';
import type {
  ConfigurationStoryblok,
  FooterColumnExternalStoryblok,
  FooterColumnInternalStoryblok,
  MultiassetStoryblok,
  PageStoryblok,
  ProjectStoryblok,
  RichtextStoryblok
} from '$types/bloks';

const uid = () => `mock-${Math.random().toString(36).slice(2, 11)}`;

// ─── Helpers ────────────────────────────────────────────────────────────────

function asset(filename: string, alt: string) {
  return {
    id: 1,
    filename,
    name: '',
    alt,
    focus: null,
    source: null,
    title: null,
    copyright: null
  };
}

const emptyRichtext = { type: 'doc', content: [] } as RichtextStoryblok;
const emptyMultiasset = [] as MultiassetStoryblok;

// ─── Agency ─────────────────────────────────────────────────────────────────

export const AGENCY = {
  name: 'Insyd',
  email: 'ishan@insyd.in',
  tagline: 'All Your IT Solutions. One Stop.',
  nav: [
    { full_slug: '/', name: 'Home' },
    { full_slug: '/about', name: 'About' },
    { full_slug: '/projects', name: 'Projects' },
    { full_slug: '/services', name: 'Services' },
    { full_slug: '/#promise', name: 'Promise' },
    { full_slug: '/contacts', name: 'Contact' }
  ] as const,
  footer: [
    {
      component: 'footer-column-internal' as const,
      _uid: uid(),
      title: 'Explore',
      links: [
        { name: 'About', full_slug: '/about' },
        { name: 'Projects', full_slug: '/projects' },
        { name: 'Services', full_slug: '/services' },
        { name: 'Promise', full_slug: '/#promise' },
        { name: 'Contact', full_slug: '/contacts' }
      ]
    },
    {
      component: 'footer-column-external' as const,
      _uid: uid(),
      title: 'Connect',
      links: [
        {
          _uid: uid(),
          component: 'link',
          label: 'Email',
          link: { linktype: 'email', email: 'ishan@insyd.in' }
        },
        {
          _uid: uid(),
          component: 'link',
          label: 'LinkedIn',
          link: { linktype: 'url', url: 'https://linkedin.com' }
        }
      ]
    }
  ] as (FooterColumnInternalStoryblok | FooterColumnExternalStoryblok)[]
};

// ─── Projects ───────────────────────────────────────────────────────────────

const PROJECT_TEMPLATE = {
  cover: asset(
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    'Project'
  ),
  thumbnail: emptyMultiasset,
  body: emptyRichtext,
  services: [] as (number | string)[],
  deliverables: [] as (number | string)[],
  intro: '',
  show_reel_controls: false
};

export const PROJECTS: Partial<ISbStoryData<ProjectStoryblok>>[] = [
  {
    id: 1,
    uuid: uid(),
    name: 'Unmesa.',
    slug: 'unmesa',
    full_slug: 'projects/unmesa',
    content: {
      _uid: uid(),
      component: 'project',
      title: 'Unmesa.',
      tagline: 'Productivity app to bring the best in you.',
      seo_title: 'Unmesa.',
      seo_description: 'Productivity app to bring the best in you.',
      ...PROJECT_TEMPLATE
    }
  },
  {
    id: 2,
    uuid: uid(),
    name: 'Unmesa.',
    slug: 'project-two',
    full_slug: 'projects/project-two',
    content: {
      _uid: uid(),
      component: 'project',
      title: 'Unmesa.',
      tagline: 'Productivity app to bring the best in you.',
      seo_title: 'Unmesa.',
      seo_description: 'Productivity app to bring the best in you.',
      ...PROJECT_TEMPLATE
    }
  }
];

// ─── Awards (shown on first project) ────────────────────────────────────────

const AWARD_TYPES = [
  { label: 'AWARD', title: 'iF Design' },
  { label: 'GOLD AWARD', title: 'German Design' },
  { label: 'AWARD', title: 'Good Design' },
  { label: 'GOLD AWARD', title: 'European Design' },
  { label: 'AWARD', title: 'Red Dot' }
];

const firstProject = PROJECTS[0];
export const MOCK_AWARDS = firstProject
  ? AWARD_TYPES.map((a, i) => ({
      id: 100 + i,
      uuid: uid(),
      name: `${a.title}-${firstProject.name}`,
      content: {
        _uid: uid(),
        component: 'recognition-entry',
        recognition: {
          name: a.title,
          content: {
            _uid: uid(),
            component: 'recognition-type',
            label: a.label,
            title: a.title
          }
        },
        project: firstProject,
        year: '2024'
      }
    }))
  : [];

// ─── Shared block content ───────────────────────────────────────────────────

const SERVICES = {
  title1: 'Our services.',
  title2: 'Design-led digital products.',
  description:
    'There is no room for shortcuts when building a great digital experience. Everything starts with thorough research and iterative experimentation. No stone is left unturned to make data-minded decisions. Then we build from scratch, designing and developing, tailored to what users need.',
  cta_label: 'Go to services →',
  cta_link: { linktype: 'url', url: '/services', cached_url: '/services' }
};

const CONTACT = {
  title1: 'Get in',
  title2: 'touch.',
  form_support_text: 'Contact us at ishan@insyd.in'
};

const PHYSICS_ITEMS = [
  { component: 'physics-rectangle-card' as const, text: 'Insyd.', theme: 'transparent' as const },
  {
    component: 'physics-rectangle-card' as const,
    text: 'Womp Womp.',
    theme: 'transparent' as const
  },
  { component: 'physics-input' as const, placeholder: 'Try me...' },
  { component: 'physics-rectangle-card' as const, text: 'Toss me.', theme: 'transparent' as const },
  {
    component: 'physics-balloon-card' as const,
    text: 'Get work done by us.',
    theme: 'yellow' as const
  },
  { component: 'physics-balloon-card' as const, text: 'Ishan Gupta', theme: 'yellow' as const },
  { component: 'physics-balloon-card' as const, text: 'Insyd', theme: 'yellow' as const },
  {
    component: 'physics-balloon-card' as const,
    text: 'This is the founder.',
    theme: 'yellow' as const
  },
  { component: 'physics-sticker' as const, photo: asset('/egg-chicken.webp', 'Chicken and egg') }
];

// ─── Configuration ──────────────────────────────────────────────────────────

export const MOCK_CONFIGURATION = {
  id: 0,
  uuid: uid(),
  name: 'Configuration',
  slug: 'configuration',
  full_slug: 'configuration',
  content: {
    _uid: uid(),
    component: 'configuration',
    primary_navigation: AGENCY.nav,
    call_to_action: [
      {
        _uid: uid(),
        component: 'link',
        label: 'Get in touch',
        link: { linktype: 'url', cached_url: '/contacts' }
      }
    ],
    footer: AGENCY.footer,
    footer_partners: []
  }
} as unknown as ISbStoryData<ConfigurationStoryblok>;

// ─── Pages ──────────────────────────────────────────────────────────────────

function physicsBlock(item: (typeof PHYSICS_ITEMS)[number]) {
  const base = { _uid: uid(), is_desktop_only: false };
  if (item.component === 'physics-input') {
    return { ...base, component: item.component, placeholder: item.placeholder };
  }
  if (item.component === 'physics-sticker') {
    return { ...base, component: item.component, photo: item.photo };
  }
  return { ...base, component: item.component, text: item.text, theme: item.theme };
}

export const MOCK_HOME_PAGE = {
  id: 1,
  uuid: uid(),
  name: 'Home',
  slug: 'home',
  full_slug: 'home',
  content: {
    _uid: uid(),
    component: 'page',
    page: [],
    blocks: [
      { _uid: uid(), component: 'hero', small_highlights: PROJECTS.slice(0, 2) },
      { _uid: uid(), component: 'projects', work_title: 'Our Work.', projects: PROJECTS },
      { _uid: uid(), component: 'newton', ...SERVICES },
      {
        _uid: uid(),
        component: 'physics',
        variant: 'hero',
        hero_title: "I Promise We'll Make it Worth It",
        overlay_subheading: '-Ishan Gupta, Founder',
        physics_blocks: PHYSICS_ITEMS.map(physicsBlock),
        section_id: 'promise'
      },
      { _uid: uid(), component: 'contact-us-form', ...CONTACT }
    ]
  }
} as unknown as ISbStoryData<PageStoryblok>;

export const MOCK_ABOUT_PAGE = {
  id: 2,
  uuid: uid(),
  name: 'About',
  slug: 'about',
  full_slug: 'about',
  content: {
    _uid: uid(),
    component: 'page',
    page: [],
    blocks: [
      {
        _uid: uid(),
        component: 'split-text',
        title: `We are ${AGENCY.name}`,
        description:
          'A creative agency focused on building great digital experiences. Edit src/lib/mock-data.ts to tell your story.',
        has_border_top: true
      },
      {
        _uid: uid(),
        component: 'core-values',
        values_title1: 'Our',
        values_title2: 'values',
        values_description: 'Quality, creativity, and collaboration drive everything we do.'
      }
    ]
  }
} as unknown as ISbStoryData<PageStoryblok>;

export const MOCK_PROJECTS_PAGE = {
  id: 3,
  uuid: uid(),
  name: 'Projects',
  slug: 'projects',
  full_slug: 'projects',
  content: {
    _uid: uid(),
    component: 'page',
    page: [{ _uid: uid(), component: 'projects-index' }],
    blocks: []
  }
} as unknown as ISbStoryData<PageStoryblok>;

export const MOCK_SERVICES_PAGE = {
  id: 4,
  uuid: uid(),
  name: 'Services',
  slug: 'services',
  full_slug: 'services',
  content: {
    _uid: uid(),
    component: 'page',
    page: [],
    blocks: [{ _uid: uid(), component: 'newton', ...SERVICES }]
  }
} as unknown as ISbStoryData<PageStoryblok>;

export const MOCK_CONTACTS_PAGE = {
  id: 5,
  uuid: uid(),
  name: 'Contact',
  slug: 'contacts',
  full_slug: 'contacts',
  content: {
    _uid: uid(),
    component: 'page',
    page: [],
    blocks: [{ _uid: uid(), component: 'contact-us-form', ...CONTACT }]
  }
} as unknown as ISbStoryData<PageStoryblok>;

export const MOCK_BLOG_PAGE = {
  id: 7,
  uuid: uid(),
  name: 'Blog',
  slug: 'blog',
  full_slug: 'blog',
  content: {
    _uid: uid(),
    component: 'page',
    page: [{ _uid: uid(), component: 'blog-index' }],
    blocks: []
  }
} as unknown as ISbStoryData<PageStoryblok>;

// ─── Slug → Story map ───────────────────────────────────────────────────────

export const MOCK_PAGES = {
  '': MOCK_HOME_PAGE,
  home: MOCK_HOME_PAGE,
  about: MOCK_ABOUT_PAGE,
  projects: MOCK_PROJECTS_PAGE,
  services: MOCK_SERVICES_PAGE,
  contacts: MOCK_CONTACTS_PAGE,
  blog: MOCK_BLOG_PAGE
} as unknown as Record<string, ISbStoryData<PageStoryblok>>;

export const MOCK_STORIES_BY_SLUG: Record<
  string,
  ISbStoryData<PageStoryblok> | Partial<ISbStoryData<ProjectStoryblok>>
> = {
  ...Object.fromEntries(Object.entries(MOCK_PAGES).map(([k, v]) => [k, v])),
  ...Object.fromEntries(PROJECTS.map((p) => [(p as { full_slug?: string }).full_slug ?? '', p]))
};
