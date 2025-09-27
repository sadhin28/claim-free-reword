const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const DOMAIN = "https://yourvercelapp.vercel.app"; // অথবা custom domain

// সমস্ত route এখানে দিন
const routes = [
  "/",
  "/about",
  "/how-it-works",
  "/faq",
  '/offers'
  
];

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: DOMAIN });
    const writeStream = createWriteStream("./public/sitemap.xml");

    sitemap.pipe(writeStream);

    routes.forEach(route => {
      sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
    });

    sitemap.end();

    await streamToPromise(sitemap);
    console.log("✅ Sitemap generated at public/sitemap.xml");
  } catch (err) {
    console.error("❌ Error generating sitemap:", err);
  }
})();
