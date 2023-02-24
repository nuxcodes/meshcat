import { cn } from '@/utils/classnames';
import '../styles/globals.css';
import { Noto_Sans, Saira } from '@next/font/google';

const saira = Saira({
  weight: ['400', '500', '600', '700'],
  variable: '--display-font',
  style: ['normal'],
  subsets: ['latin'],
});

const notosans = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  variable: '--body-font',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(saira.variable, notosans.variable)}>
      <head />
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
