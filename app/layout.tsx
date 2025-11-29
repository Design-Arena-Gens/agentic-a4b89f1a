import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
});

export const metadata: Metadata = {
  title: 'Subodh Textiles — Brand Identity',
  description:
    'Modern textile-inspired brand mark for Subodh Textiles with color explorations and usage guidance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
