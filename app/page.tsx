import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectArtifact } from '@/components/project-artifact';
import { SiteHeader } from '@/components/site-header';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="intro wrap" aria-labelledby="page-title">
        <p className="eyebrow">Ran Yi / Product manager</p>
        <div className="intro-grid">
          <h1 id="page-title">Product work</h1>
          <p className="intro-copy">
            Three prototypes I built for integration recovery, website
            inquiries, and online shopping. Each case study separates the
            product from the sample or simulated data used to demonstrate it.
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
              <p className="project-reality">{project.reality}</p>
              <p className="project-meta">{project.meta.join(' · ')}</p>
              <Link className="text-link" href={`/projects/${project.slug}`}>
                Read the case study <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
            <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Open ${project.title} case study`}>
              <ProjectArtifact kind={project.artifact} />
            </Link>
          </article>
        ))}
      </section>

      <section className="about wrap" id="about" aria-labelledby="about-title">
        <p className="eyebrow">About</p>
        <div className="about-grid">
          <h2 id="about-title">About</h2>
          <div>
            <p>I like working on products with messy handoffs and unclear next steps. Building the prototype helps me see where the product decisions actually are.</p>
            <a className="text-link" href="https://github.com/r-neu">GitHub <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer wrap"><span>Ran Yi</span><span>Product portfolio</span></footer>
    </main>
  );
}
