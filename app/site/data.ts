// Everything the page says about the studio and its work lives here.

export const CONTACT_EMAIL = "hello@insyd.in";
export const GITHUB = "https://github.com/ishan-crd";

export type Media =
  | { kind: "img"; src: string; caption: string; w: number; h: number }
  | { kind: "video"; src: string; poster: string; caption: string };

export type Project = {
  slug: string;
  theme: "thumb" | "ide" | "studio";
  name: string;
  kind: string;
  domain: string;
  url: string;
  github: string;
  headline: string;
  accent: string; // the one word in the headline set in serif italic
  body: string;
  stack: string[];
  facts: { value: string; label: string }[];
  command?: string;
  cover: string;
  media: Media[];
};

export const PROJECTS: Project[] = [
  {
    slug: "thumb",
    theme: "thumb",
    cover: "/work/thumb-hero.jpg",
    name: "thumb MCP",
    kind: "Open source · AI tooling",
    domain: "thumb.insyd.in",
    url: "https://thumb.insyd.in",
    github: "https://github.com/ishan-crd/thumb-mcp",
    headline: "Give Claude a thumb.",
    accent: "thumb.",
    body:
      "An open-source MCP that lets Claude drive your real iPhone. It taps, types, scrolls and runs whole flows from the terminal through macOS iPhone Mirroring. No jailbreak, no dev profile, nothing installed on the phone.",
    stack: ["Python", "MCP", "Apple Vision OCR", "macOS"],
    facts: [
      { value: "0", label: "apps installed on the iPhone" },
      { value: "MIT", label: "licensed, on GitHub" },
      { value: "1 line", label: "to add it to Claude" },
    ],
    command: "claude mcp add thumb -- uvx thumb-mcp",
    media: [
      { kind: "img", src: "/work/thumb-hero.jpg", caption: "Landing page", w: 2000, h: 1250 },
      { kind: "img", src: "/work/thumb-demo.jpg", caption: "Scroll-driven live demo", w: 2000, h: 1250 },
      { kind: "img", src: "/work/thumb-how.jpg", caption: "Reads. Taps. Checks.", w: 2000, h: 1250 },
    ],
  },
  {
    slug: "insyde",
    theme: "ide",
    cover: "/work/ide-hero.jpg",
    name: "InsyDE",
    kind: "Native desktop app · Developer tools",
    domain: "ide.insyd.in",
    url: "https://ide.insyd.in",
    github: "https://github.com/ishan-crd/IDE-by-Insyd",
    headline: "The native IDE for coding agents.",
    accent: "coding agents.",
    body:
      "Run Claude Code, Codex, OpenCode, Pi, Grok, Cursor and Antigravity side by side, each in its own git worktree with its own terminals and diff. GPU-rendered in Rust on GPUI, with a Project Brain that gives every agent lasting context about the repo.",
    stack: ["Rust", "GPUI", "Agent Client Protocol", "SQLite"],
    facts: [
      { value: "7", label: "coding agents, one window" },
      { value: "0.1s", label: "to spin up a task worktree" },
      { value: "0", label: "lines of Electron" },
    ],
    media: [
      { kind: "img", src: "/work/ide-hero.jpg", caption: "ide.insyd.in", w: 2000, h: 1250 },
      { kind: "img", src: "/work/ide-app.jpg", caption: "Agents, worktrees, diffs and terminals", w: 2000, h: 1250 },
    ],
  },
  {
    slug: "studio",
    theme: "studio",
    cover: "/work/studio-hero.jpg",
    name: "Studio",
    kind: "Creative tools · Video",
    domain: "studio.insyd.in",
    url: "https://studio.insyd.in",
    github: "https://github.com/ishan-crd/Insyd.Studio",
    headline: "Edit video like it’s code. Because it is.",
    accent: "Because it is.",
    body:
      "A desktop-grade editor for Remotion projects with Claude built in. Every scene, element and sound sits on a timeline; edit by hand or just ask. Saving writes the changes back into the source, so the video stays real code. Ships with a template marketplace and a hosted MCP.",
    stack: ["React", "Remotion", "TypeScript", "MCP"],
    facts: [
      { value: "54", label: "clips in the launch template" },
      { value: "71", label: "sounds on its timeline" },
      { value: "100%", label: "of edits written back to code" },
    ],
    media: [
      { kind: "img", src: "/work/studio-hero.jpg", caption: "Template marketplace", w: 2000, h: 1250 },
      { kind: "img", src: "/work/studio-editor.jpg", caption: "The editor: timeline, canvas, inspector", w: 2000, h: 1250 },
      { kind: "video", src: "/work/tpl-studio-launch.mp4", poster: "/work/tpl-studio-launch.jpg", caption: "A launch film made in Studio" },
    ],
  },
];

export const FILMS = [
  {
    title: "Studio by Insyd",
    meta: "Launch film · 0:58 · 10 scenes",
    note: "Glyph type over a rolling character-art terrain, cut to an original 120 BPM score.",
    src: "/work/tpl-studio-launch.mp4",
    poster: "/work/tpl-studio-launch.jpg",
    ratio: "16 / 9",
  },
  {
    title: "thumb MCP",
    meta: "Launch film · 0:51",
    note: "A pixel thumb takes over an iPhone. Paper, ink, coral and blue.",
    src: "/work/thumb-film.mp4",
    poster: "/work/thumb-film.jpg",
    ratio: "16 / 9",
  },
  {
    title: "Opus Viral",
    meta: "Social cut · 0:14 · 1:1",
    note: "Fourteen seconds of UI motion studies built for the X timeline.",
    src: "/work/tpl-opus-viral.mp4",
    poster: "/work/tpl-opus-viral.jpg",
    ratio: "1 / 1",
  },
];

export const SERVICES = [
  {
    title: "AI agents & MCP",
    body: "Agents that actually do the work: MCP servers, tool design, evals and the plumbing that makes them reliable.",
    items: ["MCP servers", "Agent workflows", "Claude integrations"],
  },
  {
    title: "Native & desktop apps",
    body: "Fast, native software people keep open all day. Rust, GPU-rendered UI, no Electron tax.",
    items: ["Rust + GPUI", "macOS apps", "CLIs & dev tools"],
  },
  {
    title: "Web products",
    body: "From first prototype to production: product design, frontend and backend, shipped on the web.",
    items: ["Product design", "React & Next.js", "Vercel"],
  },
  {
    title: "Launch films & sites",
    body: "The launch itself. Scroll-driven landing pages and motion films rendered from code, so they’re easy to change.",
    items: ["Landing pages", "Remotion films", "Brand in motion"],
  },
];

export const STEPS = [
  { title: "Find the sharp edge", body: "We start with the one thing your product has to do better than anything else, and cut the rest." },
  { title: "Design in the real thing", body: "Prototypes, not slide decks. You click it, you feel it, we change it the same day." },
  { title: "Build it properly", body: "Production code from week one: tested, typed and fast, in a repo you own." },
  { title: "Launch loud", body: "A landing page and a launch film that make people stop scrolling, shipped with the product." },
];
