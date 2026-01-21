import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postFiles = import.meta.glob('../posts/*.md', { as: 'raw' });
      const postPromises = Object.entries(postFiles).map(
        async ([, importer]) => {
          const rawContent = await importer();
          const { data } = matter(rawContent);
          return data as Post;
        }
      );

      const resolvedPosts = await Promise.all(postPromises);
      const sortedPosts = resolvedPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setPosts(sortedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.slug}
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
