import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'McHenry Bros',
  description: 'McHenry Bros, a construction company based in Ballycastle.',
  keywords: [
    'Construction Company', 'Building Services', 'Construction Services', 'Residential Construction', 'Commercial Construction',
    'Property Development', 'Construction Projects', 'Ballycastle Construction', 'Northern Ireland Builders', 'Construction Management',
    'Renovation Services', 'Building Renovation', 'Home Extensions', 'New Build Homes', 'Civil Engineering', 'Architectural Services',
    'Project Management', 'Sustainable Construction', 'Construction Consultancy', 'Ballycastle', 'North Coast', 'Causeway Coast',
    'Antrim Coast', 'Northern Ireland', 'NI Construction', 'Construction Expertise', 'Property Maintenance', 'Custom Builds',
    'Eco-Friendly Building', 'Land Development', 'Construction Planning', 'Building Regulations', 'Construction Safety'
  ],
  metadataBase: new URL('https://mchenrybros.com'),
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/images/logo-bg.jpg',
    title: 'McHenry Bros',
    description: 'McHenry Bros, a construction company based in Ballycastle.',
    url: 'https://mchenrybros.com/',
    siteName: 'McHenry Bros',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
