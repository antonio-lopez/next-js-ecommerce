import '../styles/globals.css';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <NextSeo
          title='Amiibo Hub'
          description='A Next.js Ecommerce store where you can purchase an assortment of Amiibos at unbeatable prices. Browse our collection or choose from a game series or an Amiibo series.'
          canonical='https://antonio-amiibo-hub.vercel.app/'
          openGraph={{
            type: 'website',
            url: 'https://antonio-amiibo-hub.vercel.app/',
            title: 'Amiibo Hub',
            description:
              'A Next.js Ecommerce store where you can purchase an assortment of Amiibos at unbeatable prices. Browse our collection or choose from a game series or an Amiibo series.',
            images: [
              {
                url: 'https://raw.githubusercontent.com/antonio-lopez/nextjs-drinks-ecommerce/main/public/images/og-modern-times-home.png',
                width: 800,
                height: 600,
                alt: 'Amiibo Home Page',
                type: 'image/jpg',
              },
            ],
          }}
        />
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
