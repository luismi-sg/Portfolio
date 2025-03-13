import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

const BASE_URL = "https://www.luismi.xyz/";

const pages = [
  "",
  "sobremi",
  "trabajos",
  "contacto",
  "beatscene",
  "universidad-de-lima",
  "thespecialone"
];

const sitemap = new SitemapStream({ hostname: BASE_URL });

pages.forEach((page) => {
  sitemap.write({ url: `/${page}`, changefreq: "daily", priority: 0.7 });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  writeFileSync("public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generado en public/sitemap.xml");
});
