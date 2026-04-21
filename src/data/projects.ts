export interface Project {
	slug: string;
	name: string;
	tagline: string;
	category: string;
	year: number;
	client: string;
	role: string;
	duration: string;
	featured: boolean;
	color: string;
	accentInk: string;
	summary: string;
	kpis: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
	{
		slug: "unmesa",
		name: "Unmesa",
		tagline: "Productivity app to bring the best in you.",
		category: "Productivity",
		year: 2024,
		client: "Unmesa, Inc.",
		role: "Strategy · Design · Development",
		duration: "14 months",
		featured: true,
		color: "#E8593A",
		accentInk: "#F3F0EA",
		summary:
			"A focus-first operating system for knowledge workers. Unmesa blends deep-work rituals, intention setting, and adaptive scheduling into a single calm surface.",
		kpis: [
			{ label: "Weekly active users", value: "148K" },
			{ label: "Avg. focus time / day", value: "3h 12m" },
			{ label: "NPS after 30 days", value: "72" },
		],
	},
	{
		slug: "helix",
		name: "Helix",
		tagline: "An IDE for autonomous agents.",
		category: "AI / Dev Tools",
		year: 2025,
		client: "Helix Labs",
		role: "Product Design · Engineering",
		duration: "9 months",
		featured: true,
		color: "#0E7C66",
		accentInk: "#F3F0EA",
		summary:
			"A coding environment built around agent loops — Helix treats agents as first-class citizens, with visible context windows, checkpoints, and a timeline that lets humans scrub through any run.",
		kpis: [
			{ label: "Agents orchestrated", value: "1.2M+" },
			{ label: "Token cost reduced", value: "-41%" },
			{ label: "Ship time", value: "6 wks → 4 days" },
		],
	},
	{
		slug: "mira",
		name: "Mira",
		tagline: "On-chain treasury for modern DAOs.",
		category: "Web3",
		year: 2025,
		client: "Mira Protocol",
		role: "Brand · Product · Web",
		duration: "7 months",
		featured: true,
		color: "#2E3CFF",
		accentInk: "#F3F0EA",
		summary:
			"Multi-sig treasury management that reads like a bank statement, not a block explorer. Payroll, vesting, and governance in one ledger.",
		kpis: [
			{ label: "TVL serviced", value: "$312M" },
			{ label: "DAOs onboarded", value: "84" },
			{ label: "Txn failure rate", value: "0.04%" },
		],
	},
	{
		slug: "fieldnote",
		name: "Fieldnote",
		tagline: "A writing app for thinkers, not typists.",
		category: "Productivity",
		year: 2024,
		client: "Fieldnote Co.",
		role: "Design · iOS · macOS",
		duration: "8 months",
		featured: false,
		color: "#C88A3C",
		accentInk: "#0B0B0A",
		summary:
			"Fieldnote is a long-form editor that tracks the shape of your argument. Outlines fold and unfold like paper; citations pull themselves together at the end.",
		kpis: [
			{ label: "App Store rating", value: "4.8" },
			{ label: "Paid conversion", value: "11.2%" },
			{ label: "Retained at D30", value: "63%" },
		],
	},
	{
		slug: "prism",
		name: "Prism",
		tagline: "A developer platform for private LLMs.",
		category: "AI / Dev Tools",
		year: 2025,
		client: "Prism Systems",
		role: "Brand · Dashboard · Docs",
		duration: "11 months",
		featured: false,
		color: "#7B2CBF",
		accentInk: "#F3F0EA",
		summary:
			"Prism lets enterprise teams run, fine-tune, and observe private language models on their own infrastructure. We designed the control plane and the developer portal from zero.",
		kpis: [
			{ label: "Enterprise customers", value: "38" },
			{ label: "P95 latency", value: "112ms" },
			{ label: "Time to first call", value: "< 4 min" },
		],
	},
	{
		slug: "arclight",
		name: "Arclight",
		tagline: "Zero-knowledge identity for the open web.",
		category: "Web3",
		year: 2026,
		client: "Arclight Foundation",
		role: "Brand · Wallet · Web",
		duration: "6 months",
		featured: false,
		color: "#0B0B0A",
		accentInk: "#F3F0EA",
		summary:
			"A privacy-preserving identity layer with a wallet interface that normal people can actually use. We designed the cryptographic UX so proofs feel like sending a text.",
		kpis: [
			{ label: "Identities issued", value: "2.1M" },
			{ label: "Supported dApps", value: "140+" },
			{ label: "Onboarding drop-off", value: "-58%" },
		],
	},
];

export interface CaseStudyContent {
	challenge: string;
	approach: string;
	outcome: string;
	screens: { label: string; variant: string; title: string }[];
}

export const CASE_STUDY_CONTENT: Record<string, CaseStudyContent> = {
	unmesa: {
		challenge:
			"Unmesa arrived with a fragmented product: three separate tools (tasks, calendar, journal) that knew nothing about each other. The team had traction but churn was high — users loved the pieces, none of the whole. They asked us to make it one thing.",
		approach:
			"We reframed the product around a single ritual: the morning intention. Every surface in the app answers one question — what's the one thing that matters today? Tasks became supporting cast; the calendar became a horizon, not a todo list. The journal turned into an end-of-day debrief that closed the loop.",
		outcome:
			"Retention at D30 jumped from 28% to 63% in the first quarter after launch. Weekly active users doubled in six months. The app now carries a 4.8 rating with over 12,000 reviews.",
		screens: [
			{
				label: "Home / Today",
				variant: "primary",
				title: "One ritual.\nEvery day.",
			},
			{
				label: "Focus mode",
				variant: "dark",
				title: "Deep work,\nmeasured in\nhours.",
			},
			{
				label: "The debrief",
				variant: "ink",
				title: "Close the\nloop before\nyou close\nthe laptop.",
			},
		],
	},
	helix: {
		challenge:
			"Helix Labs had a working agent runtime but no interface fit for humans. Engineers were running agents from terminal commands and guessing at what went wrong. They needed an IDE that made agent loops legible.",
		approach:
			"We treated each agent run as a timeline you can scrub. Context windows are visible, token costs live next to each step, and checkpoints let a human rewind to any branch point and fork a new run from there. The design leaned into 'flight-recorder' energy — every decision, reversible.",
		outcome:
			"Helix reduced time-to-ship on agent features from six weeks to four days. Token spend dropped 41%. They closed a $28M Series A nine months after our engagement shipped.",
		screens: [
			{
				label: "Run timeline",
				variant: "primary",
				title: "Scrub\nthrough any\nrun.",
			},
			{
				label: "Context inspector",
				variant: "dark",
				title: "See what\nthe agent\nsaw.",
			},
			{
				label: "Checkpoint graph",
				variant: "ink",
				title: "Every\nbranch,\nreversible.",
			},
		],
	},
	mira: {
		challenge:
			"DAOs were managing multi-million dollar treasuries from block explorers and Google Sheets. Mira Protocol had built a multi-sig contract system; they needed a surface non-crypto-native CFOs could operate without losing their mind.",
		approach:
			"We designed the product to look like a bank statement, not a wallet. Transactions have labels. Payroll runs on schedules. Vesting shows you the next twelve months at a glance. Every on-chain action has an off-chain explanation built into the UI.",
		outcome:
			"Mira now manages $312M in DAO treasury across 84 organizations. Transaction failure rates dropped to 0.04%. Support volume fell by two-thirds post-launch.",
		screens: [
			{
				label: "Treasury ledger",
				variant: "primary",
				title: "Reads like\na bank\nstatement.",
			},
			{
				label: "Schedule payroll",
				variant: "dark",
				title: "Salary day,\non-chain.",
			},
			{
				label: "Vesting timeline",
				variant: "ink",
				title: "Twelve\nmonths,\nin focus.",
			},
		],
	},
	fieldnote: {
		challenge:
			"Fieldnote's founders were long-form writers frustrated with the state of writing tools. Docs apps treated a 20,000-word essay the same as a grocery list. They wanted a tool that tracked the shape of an argument, not just its letters.",
		approach:
			"We built an outliner that lives above the text. Sections fold and unfold like paper. Citations collect themselves as you write. A reading-time estimate sits next to every heading so you feel the document's shape. Typography was non-negotiable.",
		outcome:
			"Fieldnote hit 4.8 stars on the App Store in month one. Paid conversion is 11.2% — more than double the category median. D30 retention sits at 63%.",
		screens: [
			{
				label: "The editor",
				variant: "primary",
				title: "Long-form,\nas it should\nbe.",
			},
			{
				label: "Outline mode",
				variant: "dark",
				title: "See the\nshape of\nyour argument.",
			},
			{
				label: "Citations drawer",
				variant: "ink",
				title: "Footnotes\nthat gather\nthemselves.",
			},
		],
	},
	prism: {
		challenge:
			"Prism wanted to let enterprises run their own LLMs — private, fine-tuned, observable. The science was solid; the interface was four dashboards stitched together with urls. Nothing about it felt like a product.",
		approach:
			"We designed a single control plane: deploy, observe, fine-tune. The IA collapses from fifty screens to nine. Docs were rewritten from scratch with working playgrounds embedded in every page, so developers could paste a token and be making calls in under four minutes.",
		outcome:
			"Prism now serves 38 enterprise customers. P95 latency sits at 112ms across regions. Developer onboarding — token to first successful call — averages 3 minutes 41 seconds.",
		screens: [
			{
				label: "Deployments",
				variant: "primary",
				title: "Deploy.\nObserve.\nFine-tune.",
			},
			{
				label: "Observability",
				variant: "dark",
				title: "Every\nprompt,\ntraceable.",
			},
			{
				label: "Developer docs",
				variant: "ink",
				title: "Token to\nfirst call:\nfour\nminutes.",
			},
		],
	},
	arclight: {
		challenge:
			"Arclight is building zero-knowledge identity for the open web. The cryptography is state of the art; the UX needed to make 'I am over 21 but I'm not telling you my birthday' feel as simple as unlocking your phone.",
		approach:
			"We designed the wallet around a single metaphor: the proof card. Each credential is a card in your pocket; sharing one is a swipe. We hid the cryptographic ceremony behind a single animated confirmation — the zkSNARK is still generating, but the user just sees a checkmark.",
		outcome:
			"2.1M identities issued in the first year. 140+ dApps integrated. Onboarding drop-off dropped 58% vs. the previous prototype.",
		screens: [
			{
				label: "Proof cards",
				variant: "primary",
				title: "Your\ncredentials,\nin a pocket.",
			},
			{
				label: "Share a proof",
				variant: "dark",
				title: "Prove it\nwithout\nshowing\nit.",
			},
			{ label: "Settings", variant: "ink", title: "Privacy,\nset once." },
		],
	},
};
