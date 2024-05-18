import { Archivo_Black } from 'next/font/google';
import localFont from 'next/font/local';

export const fontPretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  weight: '300 400 500 600 900',
  variable: '--font-pretendard',
  preload: true,
});

export const fontarchivo = Archivo_Black({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo',
  preload: true,
});
