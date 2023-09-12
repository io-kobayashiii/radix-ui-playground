import { Theme } from '@radix-ui/themes';
import './globals.scss';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar';
import { RecoilRootProvider } from '@/components/Provider/RecoilRootProvider';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Radix-UI-Playground',
  description: "Using the radix-ui's components and try to customize it.",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="jp">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100">
        <RecoilRootProvider>
          <Theme className="flex">
            <Sidebar />
            <div className="grow">
              <Header />
              <div className="flex justify-center ">
                <main className="w-100p max-w-xl p-24">{children}</main>
              </div>
            </div>
          </Theme>
        </RecoilRootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
