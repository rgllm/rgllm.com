const title = 'Rogério Moreira – Software Engineer, writer, maker.';
const description =
  'Software engineer, writer, and maker living and working from Braga, Portugal.';

const SEO = {
  title,
  description,
  canonical: 'https://rgllm.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rgllm.com',
    title,
    description,
    images: [
      {
        url: 'https://rgllm.com/static/images/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@rgllm',
    site: '@rgllm',
    cardType: 'summary_large_image'
  }
};

export default SEO;