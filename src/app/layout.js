"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body>
        {!isHomePage && <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}

