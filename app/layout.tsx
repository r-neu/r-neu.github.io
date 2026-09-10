import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://r-neu.github.io'),
  title: 'Ran Yi — Product Portfolio',
  description: 'Product work by Ran Yi across integration recovery, response workflows, and product discovery.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
