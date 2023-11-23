import Settings from '@/components/settings/Settings';
import { RtlProvider } from '@/components/settings/utils/RTLProvider';
import './globals.css';
import './themes.css';

export const metadata = {
  title: 'Moon Design System',
  description:
    'Maintain the integrity of their user experience and optimize design and development resources.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <RtlProvider>
        <body className="theme-moon-light">
          <main className="bg-goku flex flex-col items-center py-20">
            {children}
          </main>
          <Settings />
        </body>
      </RtlProvider>
    </html>
  );
}
