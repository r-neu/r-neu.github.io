import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';

export default function NotFound() {
  return <main><SiteHeader /><section className="not-found wrap"><p className="eyebrow">404</p><h1>This page isn’t here.</h1><Link className="text-link" href="/">Back to selected work</Link></section></main>;
}
