import { NextSeo, ArticleJsonLd } from 'next-seo';
import React from 'react';

const BlogSeo = ({ title, excerpt, date, url, image }) => {
  const formatedDate = new Date(date).toISOString();
  const featuredImage = {
    url: `https://rgllm.com${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Rogério Moreira`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: formatedDate
          },
          url,
          title,
          description: excerpt,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Rogério Moreira"
        dateModified={formatedDate}
        datePublished={formatedDate}
        description={excerpt}
        images={[featuredImage]}
        publisherLogo="/static/favicons/favicon-192x192.png"
        publisherName="Rogério Moreira"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;