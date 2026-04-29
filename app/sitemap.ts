import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rachittiwari.com' // Replace with actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Since it's a single page portfolio, the root route is sufficient.
    // If we add dynamic pages (e.g. blog), they would go here.
  ]
}
