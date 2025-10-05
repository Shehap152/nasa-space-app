import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const routes = ['', '/publications', '/dashboard', '/apod', '/favorites', '/knowledge-gaps', '/data-integrations', '/about']
  return routes.map((route) => ({ url: `${base}${route}`, changefreq: 'weekly', priority: route === '' ? 1 : 0.6 }))
}


