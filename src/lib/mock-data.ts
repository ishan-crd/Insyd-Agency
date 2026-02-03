/**
 * Static mock content for running without Storyblok.
 * Customize this file to showcase your agency and projects.
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

// ─── Customize your agency info here ───────────────────────────────────────

export const AGENCY = {
  name: 'Your Agency',
  email: 'hello@youragency.com',
  // Navigation links (slug, label)
  nav: [
    { full_slug: '/', name: 'Home' },
    { full_slug: '/about', name: 'About' },
    { full_slug: '/projects', name: 'Projects' },
    { full_slug: '/services', name: 'Services' },
    { full_slug: '/#promise', name: 'Promise' },
    { full_slug: '/contacts', name: 'Contact' }
  ],
  // Footer columns: { title, links: [{ name, full_slug }] or [{ label, link: { linktype, url } }] }
  footer: [
    {
      component: 'footer-column-internal',
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
      component: 'footer-column-external',
      _uid: uid(),
      title: 'Connect',
      links: [
        {
          _uid: uid(),
          component: 'link',
          label: 'Email',
          link: { linktype: 'email', email: 'hello@youragency.com' }
        },
        {
          _uid: uid(),
          component: 'link',
          label: 'LinkedIn',
          link: { linktype: 'url', url: 'https://linkedin.com' }
        }
      ]
    }
  ]
};

// Award/recognition types – customize with your design awards
const AWARD_LOGOS: { label: string; title: string; imageUrl?: string }[] = [
  { label: 'AWARD', title: 'iF Design' },
  { label: 'GOLD AWARD', title: 'German Design' },
  { label: 'AWARD', title: 'Good Design' },
  { label: 'GOLD AWARD', title: 'European Design' },
  { label: 'AWARD', title: 'Red Dot' }
];

// Sample projects – add your own (services/deliverables used for project filters)
// For "Selected work" style: add tagline, cover image URL, and link awards via MOCK_AWARDS
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
      subtitle: 'Productivity app to bring the best in you.',
      intro: '',
      show_reel_controls: false,
      // Add your project cover/mockup image URL (e.g. from /static/ or external)
      cover: {
        id: 1,
        filename: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
        name: '',
        alt: 'Dia app',
        focus: null,
        source: null,
        title: null,
        copyright: null
      },
      thumbnail: [] as MultiassetStoryblok,
      body: { type: 'doc', content: [] } as RichtextStoryblok,
      services: [] as (number | string)[],
      deliverables: [],
      seo_title: 'Dia.',
      seo_description: 'An app to empower women in their fertility journey.'
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
      subtitle: 'Productivity app to bring the best in you.',
      intro: '',
      show_reel_controls: false,
      cover: {
        id: 2,
        filename: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
        name: '',
        alt: 'Unmesa app',
        focus: null,
        source: null,
        title: null,
        copyright: null
      },
      thumbnail: [] as MultiassetStoryblok,
      body: { type: 'doc', content: [] } as RichtextStoryblok,
      services: [] as (number | string)[],
      deliverables: [],
      seo_title: 'Unmesa.',
      seo_description: 'Productivity app to bring the best in you.'
    }
  }
];

// Awards linked to projects (project id must match PROJECTS[].id)
// These show as badges in the "Selected work" / featured project section
const firstProject = PROJECTS[0];
export const MOCK_AWARDS = firstProject
  ? AWARD_LOGOS.map((a, i) => ({
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
            title: a.title,
            image: a.imageUrl
              ? {
                  id: 1,
                  filename: a.imageUrl,
                  name: '',
                  alt: null,
                  focus: null,
                  source: null,
                  title: null,
                  copyright: null
                }
              : undefined
          }
        },
        project: firstProject,
        year: '2024'
      }
    }))
  : [];

// ─── Configuration (nav, footer) ───────────────────────────────────────────

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
    footer: AGENCY.footer as (FooterColumnInternalStoryblok | FooterColumnExternalStoryblok)[],
    footer_partners: []
  }
} as unknown as ISbStoryData<ConfigurationStoryblok>;

// ─── Shared physics blocks (interactive draggable section) ───────────────────

const PHYSICS_DRAGGABLE_BLOCKS = [
  {
    _uid: uid(),
    component: 'physics-rectangle-card' as const,
    text: 'Insyd.',
    theme: 'transparent' as const,
    is_desktop_only: false
  },
  {
    _uid: uid(),
    component: 'physics-rectangle-card' as const,
    text: 'Womp Womp.',
    theme: 'transparent' as const,
    is_desktop_only: false
  },
  {
    _uid: uid(),
    component: 'physics-input' as const,
    placeholder: 'Try me...',
    is_desktop_only: false
  },
  {
    _uid: uid(),
    component: 'physics-rectangle-card' as const,
    text: 'Toss me.',
    theme: 'transparent' as const,
    is_desktop_only: false
  },
  {
    _uid: uid(),
    component: 'physics-balloon-card' as const,
    text: 'Get work done by us.',
    theme: 'yellow' as const,
    is_desktop_only: false
  },
  {
    _uid: uid(),
    component: 'physics-balloon-card' as const,
    text: 'Ishan Gupta',
    theme: 'yellow' as const,
    is_desktop_only: false
  },
  {
    _uid: uid(),
    component: 'physics-balloon-card' as const,
    text: 'Insyd',
    theme: 'yellow' as const,
    is_desktop_only: false
  },
  {
    _uid: uid(),
    component: 'physics-balloon-card' as const,
    text: 'This is the founder.',
    theme: 'yellow' as const,
    is_desktop_only: false
  },
  {
    _uid: uid(),
    component: 'physics-sticker' as const,
    photo: {
      id: 1,
      filename: '/egg-chicken.webp',
      name: '',
      alt: 'Chicken and egg',
      focus: null,
      source: null,
      title: null,
      copyright: null
    },
    is_desktop_only: false
  }
];

// ─── Home page (uses blocks for layout) ─────────────────────────────────────

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
      {
        _uid: uid(),
        component: 'hero',
        small_highlights: PROJECTS.slice(0, 2)
      },
      {
        _uid: uid(),
        component: 'projects',
        work_title: 'Our Work.',
        projects: PROJECTS
      },
      {
        _uid: uid(),
        component: 'newton',
        title1: 'Our services.',
        title2: 'Design-led digital products.',
        description:
          'There is no room for shortcuts when building a great digital experience. Everything starts with thorough research and iterative experimentation. No stone is left unturned to make data-minded decisions. Then we build from scratch, designing and developing, tailored to what users need.',
        cta_label: 'Go to services →',
        cta_link: {
          linktype: 'url',
          url: '/services',
          cached_url: '/services'
        }
      },
      {
        _uid: uid(),
        component: 'physics',
        variant: 'hero',
        hero_title: "I Promise We'll Make it Worth It",
        overlay_subheading: '-Ishan Gupta, Founder',
        physics_blocks: PHYSICS_DRAGGABLE_BLOCKS,
        section_id: 'promise'
      },
      {
        _uid: uid(),
        component: 'contact-us-form',
        title1: 'Get in',
        title2: 'touch.',
        form_support_text: 'Contact us at ishan@insyd.in'
      }
    ]
  }
};

// ─── About page ────────────────────────────────────────────────────────────

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
        title: 'We are ' + AGENCY.name,
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

// ─── Projects index ────────────────────────────────────────────────────────

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

// ─── Services page ─────────────────────────────────────────────────────────

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
    blocks: [
      {
        _uid: uid(),
        component: 'newton',
        title1: 'Our services.',
        title2: 'Design-led digital products.',
        description:
          'There is no room for shortcuts when building a great digital experience. Everything starts with thorough research and iterative experimentation. No stone is left unturned to make data-minded decisions. Then we build from scratch, designing and developing, tailored to what users need.',
        cta_label: 'Go to services →',
        cta_link: {
          linktype: 'url',
          url: '/services',
          cached_url: '/services'
        }
      }
    ]
  }
} as unknown as ISbStoryData<PageStoryblok>;

// ─── Contact page ──────────────────────────────────────────────────────────

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
    blocks: [
      {
        _uid: uid(),
        component: 'contact-us-form',
        title1: 'Get in',
        title2: 'touch',
        form_support_text: 'Contact us at ishan@insyd.in'
      }
    ]
  }
} as unknown as ISbStoryData<PageStoryblok>;

// ─── Blog index ────────────────────────────────────────────────────────────

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
    blocks: [] // blog-index uses page array, need blogIndex from fetch
  }
} as unknown as ISbStoryData<PageStoryblok>;

// ─── Page slug → story map ────────────────────────────────────────────────

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
