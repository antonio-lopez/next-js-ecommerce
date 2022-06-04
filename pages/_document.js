import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Roboto:wght@500;700;900&display=swap'
            rel='stylesheet'
          />
          <link rel='shortcut icon' href='/icons8-game-flaticons-flat-32.png' />
        </Head>
        <body className='bg-lightBeige'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
