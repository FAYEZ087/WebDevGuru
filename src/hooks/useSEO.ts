import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  schema?: Record<string, any>;
}

export const useSEO = ({ 
  title, 
  description, 
  ogImage = '/og-image.jpg', 
  canonicalUrl,
  noindex = false,
  schema
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = canonicalUrl || `https://webdevguru.tech${location.pathname}`;

  useEffect(() => {
    // We handle the actual tag updates via Helmet in the component return,
    // but this hook helps centralize the logic and properties.
  }, [location]);

  return {
    title,
    description,
    ogImage,
    currentUrl,
    noindex,
    schema
  };
};
