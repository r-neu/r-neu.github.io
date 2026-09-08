import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ProjectPreview } from '@/components/project-preview';
import { SiteHeader } from '@/components/site-header';
import { getProject, projects } from '@/lib/projects';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: `${project.title} — Ran Yi`, description: project.deck } : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <SiteHeader />
      <article className="case-study wrap">
        <Link className="back-link" href="/"><ArrowLeft aria-hidden="true" size={14} /> All work</Link>

        <header className="case-hero">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p className="case-intro">{project.intro}</p>
          <div className="case-links">
            {project.demo && <a className="button-link" href={project.demo}>Open demo <ArrowUpRight aria-hidden="true" size={15} /></a>}
            <a className="text-link" href={project.repo}>View repository <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
        </header>

        <ProjectPreview kind={project.preview} large />

        <section className="case-section two-column" aria-labelledby="problem-heading">
          <h2 id="problem-heading">The problem</h2><p>{project.problem}</p>
        </section>

        <section className="case-section" aria-labelledby="flow-heading">
          <h2 id="flow-heading">User flow</h2>
          <ol className="flow-list">
            {project.flow.map((step, stepIndex) => (
              <li key={step.title}><span>0{stepIndex + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="case-section" aria-labelledby="decisions-heading">
          <h2 id="decisions-heading">Product decisions</h2>
          <div className="decision-list">
            {project.decisions.map((decision) => <article key={decision.title}><h3>{decision.title}</h3><p>{decision.body}</p></article>)}
          </div>
        </section>

        <section className="case-section two-column" aria-labelledby="testing-heading">
          <h2 id="testing-heading">What I tested</h2>
          <div><p>{project.testing}</p><p className="stack-line"><span>Built with</span> {project.stack}</p></div>
        </section>

        <nav className="next-project" aria-label="Next project">
          <Link href={`/projects/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowUpRight aria-hidden="true" size={22} /></Link>
        </nav>
      </article>
      <footer className="site-footer wrap"><span>Ran Yi</span><Link href="/">Selected work</Link></footer>
    </main>
  );
}
