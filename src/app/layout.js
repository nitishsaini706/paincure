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
  const isAboutPage = pathname === '/about';
  const isBlogPage = pathname === '/blogs';
  const isSolutionPage = pathname === '/pricing';
  const assesment = pathname === '/assesment';
  return (
    <html lang="en">
      <body className={`lg:mx-5 mb:mx-5 `}>
        {!isHomePage && !isAboutPage && !isBlogPage && !isSolutionPage && <Header />}
        {isAboutPage && <Header color='white' bg='blue' />}
        {isBlogPage && <Header color='white' bg='blue' />}
        {isSolutionPage && <Header color='white' bg='blue' />}
      <ToastContainer style={{ maxWidth: '50vw',marginLeft: '100px', 
           }} position="top-right"/>
        {children}
       {!assesment && <Footer />}
      </body>
    </html>
  );
}

