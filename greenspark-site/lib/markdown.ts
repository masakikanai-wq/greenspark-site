import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownContent {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  tags?: string[];
  content: string;
}

export function getMarkdownFiles(dir: string): string[] {
  const fullPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs.readdirSync(fullPath).filter((file) => file.endsWith('.md'));
}

export async function getMarkdownContent(dir: string, slug: string): Promise<MarkdownContent | null> {
  const fullPath = path.join(contentDirectory, dir, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(content);

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    content: processedContent.toString(),
  };
}

export async function getAllMarkdownContent(dir: string): Promise<MarkdownContent[]> {
  const files = getMarkdownFiles(dir);
  const contents = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, '');
      return getMarkdownContent(dir, slug);
    })
  );
  
  return contents.filter((content): content is MarkdownContent => content !== null);
}

export function getJsonContent(filePath: string): unknown {
  const fullPath = path.join(contentDirectory, filePath);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}