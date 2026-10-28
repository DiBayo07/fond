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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (typeof window !== 'undefined' && location.hostname.endsWith('github.io') && location.pathname.startsWith('/fond')) {
                    // Inject stylesheets with /fond prefix so site looks gorgeous on github.io
                    document.querySelectorAll('link[rel="stylesheet"]').forEach(function(l) {
                      var href = l.getAttribute('href');
                      if (href && href.startsWith('/_next') && !href.startsWith('/fond/_next')) {
                        var newLink = document.createElement('link');
                        newLink.rel = 'stylesheet';
                        newLink.href = '/fond' + href;
                        document.head.appendChild(newLink);
                      }
                    });
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
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
