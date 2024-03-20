import '@styles/global.css';

import GlobalNav from '@components/ui/global-nav';
import { Raleway } from 'next/font/google';

import { Providers } from './provider';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Stock Education',
  description: 'Learn about stocks and investing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={raleway.className}>
        <Providers>
          <div className="mx-auto max-w-xl shadow-lg">
            <GlobalNav />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
