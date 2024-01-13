import { Inter } from 'next/font/google';
import './globals.css';
import { Poppins } from 'next/font/google';
import Header from './components/Header';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });
// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mo Atef',
  description: 'Testing the new app router in Next.js',
  keywords: 'nextjs, react, router,css,node,javascript',
};

// This is the layout component that wraps the main app component
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'> {children}</main>
      </body>
    </html>
  );
}
