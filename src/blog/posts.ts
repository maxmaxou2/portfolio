export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export const posts: Post[] = [
  {
    slug: 'my-first-post',
    title: 'My First Post',
    date: '2026-01-19',
    excerpt: 'This is my first blog post. I am excited to share my thoughts with you.',
  },
];
