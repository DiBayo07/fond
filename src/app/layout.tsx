import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

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
    <html lang="ru">
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-sky-blue/20 selection:text-dark-blue">
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
