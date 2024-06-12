// src/components/Meta.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description: string;
  keywords: string;
  breadcrumbSchema: object;
  orgSchema: object;
  ogSchema: object;
}

const Meta: React.FC<MetaProps> = ({ title, description, keywords, breadcrumbSchema, orgSchema, ogSchema }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={ogSchema.title} />
      <meta property="og:description" content={ogSchema.description} />
      <meta property="og:type" content={ogSchema.type} />
      <meta property="og:url" content={ogSchema.url} />
      <meta property="og:image" content={ogSchema.image} />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
    </Helmet>
  );
};

export default Meta;
