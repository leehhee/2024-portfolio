import '@/style/style.scss';

import Favicon from '/public/favicon.png';
import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/ui/header';
import {
  fontPretendard,
  fontNeueHaasGrotesk,
  fontScript,
} from '@/components/fonts';
import Footer from '@/components/ui/footer/Footer';
import GSAPRegister from '@/components/register/gsap/GSAPRegister';
import { Cursor } from '@/components/ui/cursor';
import RenisScroll from '@/components/register/renis/RenisScroll';

export const metadata: Metadata = {
  title: 'FlowKat',
  description:
    '오픈소스 기반 Java 성능 관리 솔루션',
  keywords: [
    'APM, Java 성능 관리 솔루션',
  ],
  icons: [{ rel: 'icon', url: Favicon.src }],
  verification: {
    google: 'YxlqZ71uNOrnU5b6IEnjMCb7CYtdr-LeWdgBl6WlY5o',
  },
  applicationName: 'FlowKat',
  openGraph: {
    images: '/og-image.png',
    title: 'FlowKat',
    type: 'website',
    description:
      '오픈소스 기반 Java 성능 관리 솔루션',
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ko'
      className={`${fontScript.variable} ${fontPretendard.variable} ${fontNeueHaasGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <GSAPRegister>
          <Header />
          {children}
          <Cursor />
          <Footer />
        </GSAPRegister>
        <RenisScroll />
      </body>
    </html>
  );
}
