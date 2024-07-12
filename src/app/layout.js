import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'PainCure.ai',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
      <Header />
      {children}</body>
    </html>
  );
}
