import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CASE_STUDY_CONTENT, PROJECTS } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
	return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = PROJECTS.find((p) => p.slug === slug);
	return {
		title: project ? `${project.name} — Insyd` : "Project — Insyd",
	};
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = PROJECTS.find((p) => p.slug === slug);
	if (!project) notFound();

	const content = CASE_STUDY_CONTENT[project.slug] || CASE_STUDY_CONTENT.unmesa;
	const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
	const next = PROJECTS[(idx + 1) % PROJECTS.length];

	return (
		<>
			<Header page="projects" />
			<main>
				<ProjectDetail project={project} content={content} next={next} />
			</main>
			<Footer />
		</>
	);
}
