import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const newslettersDirectory = join(process.cwd(), "_newsletters");

export function getPostSlugs() {
  return fs.readdirSync(newslettersDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(newslettersDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllNewsletters(fields: string[] = [], max?: number) {
  const slugs = getPostSlugs();
  const newsletters = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort newsletters by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return newsletters;
}

export function getRecentNewsletters(fields: string[] = []) {
  const slugs = getPostSlugs();
  const newsletters = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort newsletters by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(0, 4);

  return newsletters;
}
