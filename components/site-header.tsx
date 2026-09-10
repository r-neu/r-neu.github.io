import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header wrap">
      <Link className="wordmark" href="/" aria-label="Ran Yi, home">Ran Yi<span>.</span></Link>
      <div className="header-role">Product Manager</div>
    </header>
  );
}
