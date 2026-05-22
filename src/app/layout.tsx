import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

// @ts-expect-error CSS import handled by Next.js
import './globals.css';
import './i18n';

import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/auth-context';
import { FirebaseClientProvider } from '@/firebase';
import { AuthRedirect } from '@/components/auth-redirect';
import PageTransition from '@/components/ui/PageTransition';
import { ThemeProvider } from '@/components/theme-provider';
import ChatWidget from '@/components/chat/chat-widget';

import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'TravelSync',
  description:
    'Collaborative trip planning with AI-powered suggestions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>

        {/* Preconnect */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* PT Sans */}
        <link
<<<<<<< HEAD
=======
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Playfair */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Noto Serif + Plus Jakarta */}
        <link
>>>>>>> edf8cfb (Final TravelSync production update)
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

      </head>

      <body
        className={`
          ${poppins.className}
          min-h-screen
          overflow-x-hidden
          bg-[#050816]
          text-white
          antialiased
        `}
      >

        {/* Ambient Background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

          {/* Purple Glow */}
          <div
            className="
              absolute
              left-0
              top-20
              h-72
              w-72
              rounded-full
              bg-purple-600/20
              blur-3xl
            "
          />

          {/* Blue Glow */}
          <div
            className="
              absolute
              bottom-0
              right-0
              h-96
              w-96
              rounded-full
              bg-blue-500/20
              blur-3xl
            "
          />

          {/* Center Glow */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-fuchsia-500/10
              blur-[150px]
            "
          />

        </div>

        <FirebaseClientProvider>

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

            <AuthProvider>

              {/* Auth Wrapper */}
              <AuthRedirect>

                {/* Smooth Page Transitions */}
                <PageTransition>
                  {children}
                </PageTransition>

              </AuthRedirect>

              {/* Floating AI Chat */}
              <ChatWidget />

              {/* Toast Notifications */}
              <Toaster />

              {/* Vercel Analytics */}
              <Analytics />

            </AuthProvider>

          </ThemeProvider>

        </FirebaseClientProvider>

      </body>
    </html>
  );
}