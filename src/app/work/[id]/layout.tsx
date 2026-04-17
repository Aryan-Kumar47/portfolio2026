import type { Metadata } from "next";
import { projects } from "@/src/components/work/projects";

interface LayoutProps {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(
    (p) => p.title.toLowerCase() === id.replace(/_/g, " ").toLowerCase(),
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for doesn't exist.",
    };
  }

  const title = project.title;
  const description =
    project.description ??
    `${project.title} — a ${project.industry ?? "digital"} project by Aryan Kumar.`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.industry ?? "",
      ...(project.service ?? []),
      "Aryan Kumar",
      "Portfolio",
    ].filter(Boolean),
    openGraph: {
      title: `${title} — Aryan Kumar`,
      description,
      url: `/work/${id}`,
      type: "article",
      images: project.image
        ? [
            {
              url: `/${project.image}`,
              width: 1200,
              height: 630,
              alt: `${project.title} screenshot`,
            },
          ]
        : undefined,
    },
    twitter: {
      title: `${title} — Aryan Kumar`,
      description,
      images: project.image ? [`/${project.image}`] : undefined,
    },
    alternates: {
      canonical: `/work/${id}`,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.title.replaceAll(" ", "_").toLowerCase(),
  }));
}

export default function ProjectLayout({ children }: LayoutProps) {
  return children;
}
