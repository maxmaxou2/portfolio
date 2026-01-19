import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [PostComponent, setPostComponent] = useState<React.ComponentType | null>(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (!slug) return;

        const findPost = async () => {
            const postModules = import.meta.glob('./*.tsx');
            let found = false;
            for (const path in postModules) {
                const module = await postModules[path]() as { meta: { slug: string }, default: React.ComponentType };
                if (module.meta && module.meta.slug === slug) {
                    setPostComponent(() => module.default);
                    found = true;
                    break;
                }
            }
            if (!found) {
                setNotFound(true);
            }
        };

        findPost();
    }, [slug]);

    if (notFound) {
        return <div>Post not found</div>;
    }

    if (!PostComponent) {
        return <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Loading...</h1></div>;
    }

    return <PostComponent />;
};

export default BlogPostPage;
