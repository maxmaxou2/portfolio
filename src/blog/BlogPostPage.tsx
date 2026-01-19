import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from './posts';

function slugToPascalCase(slug: string) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [PostComponent, setPostComponent] = useState<React.ComponentType | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const post = posts.find(p => p.slug === slug);
    if (post) {
      const componentName = slugToPascalCase(post.slug);
      import(`./${componentName}.tsx`)
        .then(module => {
          setPostComponent(() => module.default);
        })
        .catch(err => {
          console.error(`Failed to load post ${post.slug}`, err);
          setNotFound(true);
        });
    } else {
      setNotFound(true);
    }
  }, [slug]);

  if (notFound) {
    return <div>Post not found</div>;
  }

  if (!PostComponent) {
    return <div>Loading...</div>;
  }

  return <PostComponent />;
};

export default BlogPostPage;
