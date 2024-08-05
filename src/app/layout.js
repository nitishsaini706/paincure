"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <html lang="en">
      <body className='lg:mx-5 mb:mx-5'>
        {!isHomePage && <Header />}
      <ToastContainer style={{ maxWidth: '50vw',marginLeft: '100px', // Removes default margin
           }} position="top-right"/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

