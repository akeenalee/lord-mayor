const baseUrl = 'https://www.lordmayorofafrica.com';

export default function sitemap() {
  const routes = ['', '/about', '/contact', '/services', '/services/travel', '/services/construction', '/services/real-estate', '/services/agriculture', '/services/automobile'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
