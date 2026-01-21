export const meta = {
    slug: 'hello-world-wide-web',
    title: 'Hello World! (wide web)',
    date: '2026-01-20',
    excerpt: 'My very first blog post. And it is not AI-generated lol',
};

const MyFirstPost = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Welcome home!</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">January 20, 2026</p>
            <div className="prose lg:prose-xl dark:prose-invert">
                <p>
                    This blog post is mostly to verify everything is working correctly. <br />And it is! I'm delighted.
                    <br />
                    <br />
                    Posting anything on the web is quite new to me (even though I have been entertaining my LinkedIn profile for a couple years now).
                    <br />
                    <br />
                    I've always loved writing, most of the times for me. Now I can write for others as well, provided that anyone ever reads any of this.
                    <br />
                    <br />
                    I currently DO NOT know how to render markdown files so this is written in plain JSX. I'll probably fix that later.
                    <br />
                    <br />
                    So please, be my guest ;)
                </p>
            </div>
        </div>
    );
};

export default MyFirstPost;
