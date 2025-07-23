import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer'; // <-- Import the new component

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio created with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      
      <body>
        <ThemeProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}> 
              <div className="container">
                {children}
              </div>
            </main>
            <Footer /> {/* <-- Add the new component here */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
