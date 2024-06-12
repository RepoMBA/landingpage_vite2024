// src/pages/Home.tsx
import React from 'react';
import Meta from '../components/Meta';
import AmpCard from '../components/AmpCard';

const Home: React.FC = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "http://example.com/home"
      }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Example Inc.",
    "url": "http://example.com",
    "logo": "http://example.com/logo.png"
  };

  const ogSchema = {
    title: "Home Page",
    description: "Welcome to the Home Page",
    type: "website",
    url: "http://example.com/home",
    image: "http://example.com/image.jpg"
  };

  return (
    <div>
      <Meta
        title="Home Page"
        description="This is the home page"
        keywords="home, example"
        breadcrumbSchema={breadcrumbSchema}
        orgSchema={orgSchema}
        ogSchema={ogSchema}
      />
      <h1>Welcome to the Home Page</h1>
      <AmpCard />
    </div>
  );
};

export default Home;
