import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header, Footer } from '@fitness-club/ui';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to header!</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default CustomApp;
