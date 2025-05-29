import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'BSBI Info Screen Timetable',
  description: 'Transform BSBI timetables into beautiful, presentable formats',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
} 