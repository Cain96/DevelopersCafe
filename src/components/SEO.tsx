import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { SeoQuery } from '../../types/graphql-types';

type Props = {
  title?: string;
  description?: string;
  banner?: string;
  pathname?: string;
};

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY年MM月DD日")
      siteMetadata {
        defaultTitle: title
        titleAll
        shortName
        author
        siteLanguage
        logo
        siteUrl: url
        pathPrefix
        defaultDescription: description
        defaultBanner: banner
      }
    }
  }
`;

const SEO: FC<Props> = ({ title, description, banner, pathname }) => {
  const data: SeoQuery = useStaticQuery(query);

  const siteUrl = data.site?.siteMetadata?.siteUrl || '';

  const seo = {
    image: `${siteUrl}/${banner || data.site?.siteMetadata?.defaultBanner}`,
    imageWidth: '1200',
    imageHeight: '630',
    url: `${siteUrl}${pathname || ''}`,
    logoUrl: `${siteUrl}/${banner || data.site?.siteMetadata?.logo}`,
    siteLanguage: data.site?.siteMetadata?.siteLanguage || '',
    shortName: data.site?.siteMetadata?.shortName || '',
    title: title || data.site?.siteMetadata?.defaultTitle || '',
    description: description || data.site?.siteMetadata?.defaultDescription || '',
  };

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': siteUrl,
      inLanguage: seo.siteLanguage,
      url: siteUrl,
      name: data.site?.siteMetadata?.defaultTitle || '',
      alternateName: data.site?.siteMetadata?.titleAll || '',
      headline: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      datePublished: data.site?.buildTime,
      dateModified: data.site?.buildTime,
      author: {
        '@type': 'Person',
        name: data.site?.siteMetadata?.author,
      },
      publisher: {
        '@type': 'Organization',
        name: data.site?.siteMetadata?.author,
        logo: {
          '@type': 'ImageObject',
          url: seo.logoUrl,
        },
      },
      isPartOf: siteUrl,
      mainEntityOfPage: {
        '@type': 'WebSite',
        '@id': siteUrl,
      },
    },
  ];

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={seo.siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="apple-mobile-web-app-title" content={seo.shortName} />
        <meta name="application-name" content={seo.shortName} />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:image:width" content={seo.imageWidth} />
        <meta name="twitter:image:height" content={seo.imageHeight} />
      </Helmet>
    </>
  );
};

export default SEO;
