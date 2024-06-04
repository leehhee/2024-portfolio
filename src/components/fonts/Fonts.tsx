import { Archivo_Black, Oleo_Script_Swash_Caps } from 'next/font/google';
import localFont from 'next/font/local';

export const fontScript = Oleo_Script_Swash_Caps({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  preload: true,
});

export const fontNeueHaasGrotesk = localFont({
  variable: '--font-grotesk',
  display: 'swap',
  preload: true,
  src: [
    {
      path: './NeueHaasGroteskDisplay_Reg.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './NeueHaasGroteskDisplay_Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './NeueHaasGroteskDisplay_Bold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
});

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
