const MyFirstPost = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">My First Post</h1>
      <p className="text-gray-600 mb-8">January 19, 2026</p>
      <div className="prose lg:prose-xl">
        <p>
          This is the beginning of my blog. I'm excited to share my thoughts and experiences with you.
        </p>
        <p>
          I'll be writing about technology, software development, and anything else that I find interesting.
        </p>
      </div>
    </div>
  );
};

export default MyFirstPost;
