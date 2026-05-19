import { Helmet } from 'react-helmet-async';

interface SEOComponentProps {
  title: string;
  description: string;
  ogImage?: string;
  currentUrl: string;
  noindex?: boolean;
  schema?: Record<string, any>;
}

const SEO = ({ 
  title, 
  description, 
  ogImage = '/og-image.jpg', 
  currentUrl, 
  noindex = false, 
  schema 
}: SEOComponentProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
