// pages/api/drinks-feed.js
export default async function handler(req, res) {
  const drinks = [
    // Same drinks data as above
  ];

  // Generate RSS XML
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Drinks – Shah's Halal UK</title>
        <atom:link href="${process.env.NEXT_PUBLIC_SITE_URL}/api/drinks-feed" rel="self" type="application/rss+xml" />
        <link>${process.env.NEXT_PUBLIC_SITE_URL}</link>
        <description>Refreshing drinks from Shah's Halal UK</description>
        <language>en-US</language>
        ${drinks.map(drink => `
        <item>
            <title>${drink.title}</title>
            <link>${process.env.NEXT_PUBLIC_SITE_URL}${drink.link}</link>
            <description><![CDATA[${drink.fullDescription}]]></description>
            <pubDate>${new Date(drink.pubDate).toUTCString()}</pubDate>
        </item>
        `).join('')}
    </channel>
</rss>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(rss);
}
