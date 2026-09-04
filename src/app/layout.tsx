import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Project Sky — Supporting Kids & Youth',
  description: 'Благотворительный проект для поддержки детей и молодежи Кыргызстана.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-soft-blue/20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
