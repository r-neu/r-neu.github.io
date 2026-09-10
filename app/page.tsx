import { ArrowUpRight } from 'lucide-react';
import { ProjectArtifact } from '@/components/project-artifact';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="intro wrap" aria-labelledby="page-title">
        <div className="intro-grid">
          <h1 id="page-title">Product work</h1>
          <p className="intro-copy">
            Personal projects I’ve built in my own time.
          </p>
        </div>
      </section>

      <section className="project-index wrap" aria-label="Selected projects">
        {projects.map((project, index) => (
          <article className="project-row" key={project.slug}>
            <div className="project-number" aria-hidden="true">0{index + 1}</div>
            <div className="project-summary">
              <p className="project-type">{project.type}</p>
              <h2><a href={project.repo} target="_blank" rel="noreferrer">{project.title}</a></h2>
              <p className="project-deck">{project.deck}</p>
              <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
                View on GitHub <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
            <a className="project-visual-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
              <ProjectArtifact kind={project.artifact} />
            </a>
          </article>
        ))}
      </section>

    </main>
  );
}
