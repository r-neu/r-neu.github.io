import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="site-header wrap">
      <Link className="wordmark" href="/" aria-label="Ran Yi, home">RY<span>.</span></Link>
      <div className="header-role">Product manager</div>
      <nav aria-label="Primary navigation">
        <a href="https://github.com/r-neu">GitHub <ArrowUpRight aria-hidden="true" size={13} /></a>
      </nav>
    </header>
  );
}
