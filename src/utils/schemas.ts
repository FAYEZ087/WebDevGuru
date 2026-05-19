export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WebDevGuru",
  "url": "https://webdevguru.tech",
  "description": "Bespoke web design studio building conversion-focused websites for D2C brands and SaaS companies.",
  "founder": { "@type": "Person", "name": "Fayez" },
  "areaServed": "IN",
  "priceRange": "₹₹₹"
};

export const getServiceSchema = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "provider": {
    "@type": "Organization",
    "name": "WebDevGuru"
  },
  "description": description
});
