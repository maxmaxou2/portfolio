import React from 'react';

function Blog() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
            <div className="space-y-4">
                {/* Placeholder for blog posts */}
                <div className="p-4 border border-gray-700 rounded-lg">
                    <h3 className="text-xl font-bold">My First Blog Post</h3>
                    <p className="text-gray-400">This is a summary of my first blog post...</p>
                </div>
                <div className="p-4 border border-gray-700 rounded-lg">
                    <h3 className="text-xl font-bold">Another Blog Post</h3>
                    <p className="text-gray-400">This is a summary of another blog post...</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
