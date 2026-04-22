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
	tech: string[];
	liveUrl?: string;
	heroVideo?: string;
	scope: { label: string; value: string }[];
	kpis: { label: string; value: string }[];
	images: string[];
}

export const PROJECTS: Project[] = [
	{
		slug: "clipstake",
		name: "Clipstake",
		tagline:
			"Full-stack creator economy platform — landing page, dashboards, and mobile app.",
		category: "Full Product",
		year: 2025,
		client: "Clipstake",
		role: "Designer & Full Stack Developer",
		duration: "2025",
		featured: true,
		color: "#CE1111",
		accentInk: "#F3F0EA",
		summary:
			"Designed and developed Clipstake from the ground up — a polished landing page, a full-suite dashboard system covering creator, brand, and admin flows, and a native mobile app shipped in both light and dark mode. Every pixel, every endpoint, every screen built from scratch.",
		tech: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"React Native",
			"Node.js",
			"Figma",
		],
		heroVideo: "/images/clipstake/Clipstake1.mov",
		scope: [
			{ label: "Landing Page", value: "Design & Development" },
			{ label: "Web Dashboards", value: "Creator, Brand & Admin" },
			{ label: "Mobile App", value: "iOS & Android — Light + Dark" },
		],
		kpis: [
			{ label: "Dashboards built", value: "3" },
			{ label: "App themes", value: "Light + Dark" },
			{ label: "Built from", value: "Scratch" },
		],
		images: [
			"/images/clipstake/clipstakeiphone1.png",
			"/images/clipstake/clipstakeiphone2.png",
			"/images/clipstake/clipstakeiphone3.png",
			"/images/clipstake/clipstakeiphone4.png",
			"/images/clipstake/clipstakeiphone5.png",
		],
	},
	{
		slug: "denshow",
		name: "Den.Show",
		tagline: "Web3 streaming platform with seamless blockchain integration.",
		category: "Web3",
		year: 2025,
		client: "Den.Show",
		role: "Full Stack Developer",
		duration: "Oct 2025 – Dec 2025",
		featured: true,
		color: "#E8593A",
		accentInk: "#F3F0EA",
		summary:
			"A production-grade, on-chain Web3 streaming platform. Built the entire frontend and PWA architecture from scratch — wallet integrations, on-chain tipping, and stream clipping via Mux Player.",
		tech: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Mux Player API",
			"Web3 Wallets",
			"Alchemy",
		],
		liveUrl: "https://den.show/",
		scope: [
			{ label: "Web Platform", value: "Full PWA — Design & Development" },
			{ label: "Wallet Integration", value: "Multi-wallet on-chain payments" },
			{ label: "Streaming Engine", value: "Mux Player with clipping" },
		],
		kpis: [
			{ label: "Platform", value: "PWA" },
			{ label: "Wallet integrations", value: "5+" },
			{ label: "Architecture", value: "On-chain" },
		],
		images: [
			"/images/denshow/denshow.png",
			"/images/denshow/denshow2.png",
			"/images/denshow/denshow3.png",
			"/images/denshow/denshow4phone.png",
			"/images/denshow/denshow5phone.png",
		],
	},
	{
		slug: "edwance",
		name: "Edwance.ai",
		tagline: "AI-powered education platform from concept to scale.",
		category: "AI / SaaS",
		year: 2025,
		client: "Edwance.ai",
		role: "Front End Developer",
		duration: "Jul 2025 – Oct 2025",
		featured: true,
		color: "#0E7C66",
		accentInk: "#F3F0EA",
		summary:
			"End-to-end design and development of Edwance.ai's landing page and dashboard, driving the product's growth from concept to a fully scaled service with intuitive navigation and seamless UX.",
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		liveUrl: "https://edwance.ai/",
		scope: [
			{ label: "Landing Page", value: "Design & Development" },
			{ label: "Dashboard", value: "Full platform UI" },
			{ label: "Product Growth", value: "Concept to scaled service" },
		],
		kpis: [
			{ label: "Pages designed", value: "12+" },
			{ label: "Load time", value: "< 1.5s" },
			{ label: "Conversion lift", value: "+34%" },
		],
		images: ["/images/edwance/edwance-landingnobg.png"],
	},
	{
		slug: "tangle",
		name: "Tangle",
		tagline: "Cross-platform MVP for a funded startup.",
		category: "Mobile App",
		year: 2025,
		client: "Tangle",
		role: "Full Stack App Developer",
		duration: "Jul 2025 – Ongoing",
		featured: true,
		color: "#2E3CFF",
		accentInk: "#F3F0EA",
		summary:
			"Led the end-to-end design and development of Tangle's MVP — a scalable cross-platform application covering both frontend and backend architecture, from concept to a functional, user-ready product.",
		tech: ["React Native", "TypeScript", "Nativewind"],
		scope: [
			{ label: "Mobile App", value: "iOS & Android — full build" },
			{ label: "Backend", value: "API architecture from scratch" },
			{ label: "Product Design", value: "End-to-end UX & UI" },
		],
		kpis: [
			{ label: "Platforms", value: "iOS + Android" },
			{ label: "Stage", value: "Funded MVP" },
			{ label: "Stack", value: "React Native" },
		],
		images: ["/images/tangle/tangle-desnobg.png"],
	},
	{
		slug: "unmesa",
		name: "Unmesa.ai",
		tagline: "AI-powered platform revolutionizing business-AI interaction.",
		category: "AI / SaaS",
		year: 2024,
		client: "Unmesa.ai",
		role: "Full Stack Developer & Designer",
		duration: "2024 – 2025",
		featured: true,
		color: "#C88A3C",
		accentInk: "#0B0B0A",
		summary:
			"Designed and developed a comprehensive AI-powered platform that makes complex AI capabilities accessible to users of all technical backgrounds, with a modern responsive design and seamless UX.",
		tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
		liveUrl: "https://unmesa.app/",
		scope: [
			{ label: "Web Platform", value: "Full-stack design & development" },
			{ label: "AI Integration", value: "Multi-model tooling interface" },
			{ label: "Product Design", value: "End-to-end UX & responsive UI" },
		],
		kpis: [
			{ label: "AI tools integrated", value: "8+" },
			{ label: "User onboarding", value: "< 2 min" },
			{ label: "Performance", value: "95+ LH" },
		],
		images: [
			"/images/unmesa/unmesa-laptop.png",
			"/images/unmesa/unmesa-post1.png",
			"/images/unmesa/unmesa-post2.png",
			"/images/unmesa/unmesa-post3.png",
		],
	},
	{
		slug: "cradle",
		name: "Cradle",
		tagline: "Bold e-commerce for modern gym apparel.",
		category: "E-Commerce",
		year: 2024,
		client: "Cradle Clothing",
		role: "Full Stack Developer & Designer",
		duration: "2024 – 2025",
		featured: false,
		color: "#0B0B0A",
		accentInk: "#F3F0EA",
		summary:
			"Handled the entire digital presence — from Figma UX design to full-stack e-commerce development. Bold athletic aesthetic, smooth shopping experience, product listings, cart, checkout, and admin tools.",
		tech: ["React.js", "CSS", "JavaScript"],
		scope: [
			{ label: "E-Commerce Site", value: "Full-stack design & development" },
			{ label: "Brand Design", value: "Visual identity & UX in Figma" },
			{ label: "Admin Tools", value: "Product & order management" },
		],
		kpis: [
			{ label: "Products listed", value: "50+" },
			{ label: "Mobile-first", value: "100%" },
			{ label: "Checkout flow", value: "3 steps" },
		],
		images: [
			"/images/cradle/cradle.png",
			"/images/cradle/cradle-laptop.png",
			"/images/cradle/cradle-phone.png",
		],
	},
	{
		slug: "insyd",
		name: "Insyd",
		tagline: "Making nightlife more inclusive and accessible.",
		category: "Mobile App",
		year: 2025,
		client: "Insyd",
		role: "Founder, Designer & App Developer",
		duration: "Mar 2025 – Jun 2025",
		featured: false,
		color: "#7B2CBF",
		accentInk: "#F3F0EA",
		summary:
			"Built from concept to launch — a revolutionary clubbing access app bridging partygoers and nightlife venues. Handled end-to-end design, development, branding, and marketing strategy.",
		tech: ["React Native", "JavaScript"],
		liveUrl: "https://insyd.in/",
		scope: [
			{ label: "Mobile App", value: "iOS & Android — React Native" },
			{
				label: "Brand & Marketing",
				value: "Identity, strategy & go-to-market",
			},
			{ label: "Product Design", value: "End-to-end UX & UI" },
		],
		kpis: [
			{ label: "Venues onboarded", value: "20+" },
			{ label: "App rating", value: "4.7" },
			{ label: "Built in", value: "3 months" },
		],
		images: [
			"/images/insyd/insyd.png",
			"/images/insyd/insyd1.png",
			"/images/insyd/insyd2.png",
			"/images/insyd/insyd3.png",
		],
	},
];

export interface CaseStudyContent {
	challenge: string;
	approach: string;
	outcome: string;
	heroVideo?: string;
	screens: { src: string; label: string }[];
}

export const CASE_STUDY_CONTENT: Record<string, CaseStudyContent> = {
	clipstake: {
		challenge:
			"Clipstake needed an entire digital product ecosystem built from zero — no existing codebase, no design system, no brand assets. They required a high-converting landing page to establish market presence, a comprehensive dashboard system serving three distinct user types (creators, brands, and admins), and a polished native mobile app that worked seamlessly in both light and dark mode. Every layer of the product needed to feel cohesive and premium while shipping fast.",
		approach:
			"Started with the landing page — designed and developed a conversion-focused experience that communicates Clipstake's value proposition instantly, with smooth scroll animations and a bold visual identity anchored by their signature red. Then architected the full dashboard system: the creator dashboard for managing content, analytics, and earnings; the brand dashboard for campaign management, creator discovery, and performance tracking; and the admin dashboard for platform oversight, user management, and system configuration. Each dashboard was built with role-based access, real-time data, and responsive layouts. In parallel, designed and developed the mobile app from scratch in React Native, implementing a complete dual-theme system — every screen, every component, every interaction works flawlessly in both light and dark mode.",
		outcome:
			"Delivered a complete product ecosystem from scratch — a landing page that drives signups, three fully functional dashboards that power the entire creator economy workflow, and a native mobile app with pixel-perfect light and dark mode support. The platform ships with a cohesive design language across every touchpoint, from web to mobile.",
		heroVideo: "/images/clipstake/Clipstake1.mov",
		screens: [
			{
				src: "/images/clipstake/clipstakeiphone1.png",
				label: "App — Home screen",
			},
			{
				src: "/images/clipstake/clipstakeiphone2.png",
				label: "App — Creator profile",
			},
			{
				src: "/images/clipstake/clipstakeiphone3.png",
				label: "App — Campaign view",
			},
			{
				src: "/images/clipstake/clipstakeiphone4.png",
				label: "App — Analytics",
			},
			{
				src: "/images/clipstake/clipstakeiphone5.png",
				label: "App — Dark mode",
			},
		],
	},
	denshow: {
		challenge:
			"Den.Show needed a production-grade streaming platform that could handle on-chain payments, multiple wallet integrations, and a seamless viewing experience — all built as a PWA that works flawlessly across desktop and mobile.",
		approach:
			"Built the entire frontend and PWA architecture from scratch. Integrated multiple Web3 wallets with secure on-chain payment and tipping logic so creators receive real-time support. Designed and developed stream clipping functionality using Mux Player, letting users create and share highlights effortlessly.",
		outcome:
			"Delivered a fully responsive, performant progressive web app optimized for immersive viewing. The platform enables creators to receive real-time on-chain support from viewers with seamless wallet integrations across the board.",
		screens: [
			{ src: "/images/denshow/denshow.png", label: "Platform overview" },
			{ src: "/images/denshow/denshow2.png", label: "Stream view" },
			{ src: "/images/denshow/denshow3.png", label: "Creator dashboard" },
		],
	},
	edwance: {
		challenge:
			"Edwance.ai needed a digital presence that could communicate complex AI capabilities while maintaining clarity and trust. The platform had to scale from landing page to full dashboard as the product grew from concept to service.",
		approach:
			"Spearheaded the creation of a modern, responsive interface with clear user flows and intuitive navigation. Focused on thoughtful design and optimal performance to establish a strong digital presence that improved user trust.",
		outcome:
			"Delivered a seamless user experience that helped establish Edwance.ai's digital presence and drove product growth from concept to a fully scaled service, with measurable improvements in user engagement and conversion.",
		screens: [
			{ src: "/images/edwance/edwance-landingnobg.png", label: "Landing page" },
		],
	},
	tangle: {
		challenge:
			"Tangle, a funded startup, needed to go from idea to a functional MVP fast. They required a scalable cross-platform mobile application with modern design principles and robust architecture that could handle growth.",
		approach:
			"Led end-to-end design and development — architecting a scalable cross-platform application using React Native and TypeScript. Covered both frontend and backend architecture, applying modern design principles for a polished user experience.",
		outcome:
			"Transformed the idea from concept to a functional, user-ready product. The platform features modern design, robust functionality, and seamless performance across both iOS and Android devices.",
		screens: [
			{ src: "/images/tangle/tangle-desnobg.png", label: "App screens" },
		],
	},
	unmesa: {
		challenge:
			"Unmesa.ai needed a comprehensive platform that could make complex AI capabilities accessible to users of all technical backgrounds — without sacrificing power or flexibility for advanced users.",
		approach:
			"Designed and developed an intuitive user interface built with cutting-edge technologies. Created a modern, responsive design focusing on seamless user experience, handling both frontend development and backend integration for optimal performance and scalability.",
		outcome:
			"Delivered a platform that revolutionizes how businesses interact with artificial intelligence — making powerful AI tools accessible through an intuitive interface while maintaining enterprise-grade performance.",
		screens: [
			{ src: "/images/unmesa/unmesa-laptop.png", label: "Dashboard" },
			{ src: "/images/unmesa/unmesa-post1.png", label: "AI workspace" },
			{ src: "/images/unmesa/unmesa-post2.png", label: "Analytics" },
		],
	},
	cradle: {
		challenge:
			"Cradle Clothing needed a complete digital presence — from brand identity to a full e-commerce platform that matched their bold, athletic aesthetic while delivering a smooth shopping experience.",
		approach:
			"Handled everything from designing the UX in Figma to developing the full-stack e-commerce website. Crafted a bold, athletic aesthetic matching the brand's identity, implementing product listings, cart and checkout functionality, and admin tools.",
		outcome:
			"Delivered a fully responsive, performance-optimized e-commerce site that blends strong branding with seamless usability. Complete shopping experience with streamlined checkout flow.",
		screens: [
			{ src: "/images/cradle/cradle.png", label: "Homepage" },
			{ src: "/images/cradle/cradle-laptop.png", label: "Product page" },
			{ src: "/images/cradle/cradle-phone.png", label: "Mobile view" },
		],
	},
	insyd: {
		challenge:
			"The nightlife industry lacked a digital bridge between partygoers and venues. Insyd needed to be built from zero — concept, design, development, branding, and go-to-market — all within a tight timeline.",
		approach:
			"As the creator, led the product from concept to launch. Designed the UI/UX for a sleek nightlife-focused experience, built the app using React Native and Firebase, handled branding and marketing strategy, and ran user feedback loops to guide iterations.",
		outcome:
			"Insyd successfully bridges the gap between partygoers and nightlife venues, creating a dynamic clubbing ecosystem. Built and launched within 3 months with strong initial traction and positive user reception.",
		screens: [
			{ src: "/images/insyd/insyd.png", label: "Home screen" },
			{ src: "/images/insyd/insyd1.png", label: "Venue discovery" },
			{ src: "/images/insyd/insyd2.png", label: "Event details" },
		],
	},
};
