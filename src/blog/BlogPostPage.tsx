import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import matter from 'gray-matter';
import 'katex/dist/katex.min.css';

interface Frontmatter {
  title: string;
  date: string;
  slug: string;
  [key: string]: unknown;
}

interface Post {
  content: string;
  data: Frontmatter;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const getPost = async () => {
      try {
        const postFiles = import.meta.glob('../posts/*.md', { as: 'raw' });
        let found = false;
        for (const path in postFiles) {
          const rawContent = await postFiles[path]();
          const { data, content } = matter(rawContent);
          if (data.slug === slug) {
            setPost({ content, data });
            found = true;
            break;
          }
        }
        if (!found) {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setNotFound(true);
      }
    };

    getPost();
  }, [slug]);

  if (notFound) {
    return <div>Post not found</div>;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.data.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{post.data.date}</p>
      <div className="prose lg:prose-xl dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPostPage;
