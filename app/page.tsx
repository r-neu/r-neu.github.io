import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectPreview } from '@/components/project-preview';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="intro wrap" aria-labelledby="page-title">
        <p className="eyebrow">Product portfolio / 01—03</p>
        <div className="intro-grid">
          <h1 id="page-title">Selected product work</h1>
          <p className="intro-copy">
            I’m Ran Yi, a product manager who builds working prototypes. These
            projects focus on the moment when a user needs to decide what to do
            next.
          </p>
        </div>
      </section>

      <section className="project-index wrap" aria-label="Selected projects">
        {projects.map((project, index) => (
          <article className="project-row" key={project.slug}>
            <div className="project-number" aria-hidden="true">0{index + 1}</div>
            <div className="project-summary">
              <p className="project-type">{project.type}</p>
              <h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
              <p className="project-deck">{project.deck}</p>
              <p className="project-meta">{project.meta.join(' · ')}</p>
              <Link className="text-link" href={`/projects/${project.slug}`}>
                Read the case study <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
            <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`}>
              <ProjectPreview kind={project.preview} />
            </Link>
          </article>
        ))}
      </section>

      <section className="about wrap" id="about" aria-labelledby="about-title">
        <p className="eyebrow">A short note</p>
        <div className="about-grid">
          <h2 id="about-title">About</h2>
          <div>
            <p>I use prototypes to work through the details that are easy to miss in a deck: ownership, edge cases, system limits, and what a user actually sees.</p>
            <a className="text-link" href="https://github.com/r-neu">GitHub <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer wrap"><span>Ran Yi</span><span>Product portfolio</span></footer>
    </main>
  );
}
