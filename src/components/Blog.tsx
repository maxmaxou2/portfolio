import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../blog/posts';

function Blog() {
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
            <div className="space-y-4">
                {sortedPosts.map((post) => (
                    <Link to={`/blog/${post.slug}`} key={post.slug} className="block p-4 border border-gray-700 rounded-lg hover:bg-gray-800">
                        <h3 className="text-xl font-bold">{post.title}</h3>
                        <p className="text-gray-400">{post.excerpt}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Blog;
