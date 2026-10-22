// src/app/projects/page.tsx
import { Metadata } from "next";

import { site } from "@/lib/site";
import ProjectSection from "@/components/ProjectSection";
import projects from "@/lib/projectsData";

const DESCRIPTION =
  "View some of our completed shopfitting projects for Vision Express, Joel's Place, and Landmark. See complete store fit-outs and custom fixture rollouts across the Philippines.";

export const metadata: Metadata = {
  title: { absolute: "Projects" },
  description: DESCRIPTION,
  openGraph: {
    title: "Projects",
    description: DESCRIPTION,
  },
  twitter: {
    title: "Projects",
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      headline: "Projects",
      description: DESCRIPTION,
      url: `${site.url}/projects`,
    },
    {
      "@type": "ItemList",
      name: "Projects",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Vision Express", url: "#" },
        { "@type": "ListItem", position: 2, name: "Joel's Place", url: "#" },
        { "@type": "ListItem", position: 3, name: "Landmark", url: "#" },
      ],
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="proj-hero">
        <div className="proj-hero-global">
          <div className="proj-hero-container">
            <div className="proj-hero-content">
              <div className="proj-hero-heading-wrap">
                <h1 className="proj-hero-heading">What we’ve built</h1>
              </div>
              <div className="proj-hero-sub-wrap">
                <p className="proj-hero-sub">
                  A closer look at the spaces, systems, and custom fixtures
                  we’ve delivered for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project entries ── */}
      {projects.map((proj) => (
        <ProjectSection key={proj.id} {...proj} />
      ))}
    </>
  );
}
