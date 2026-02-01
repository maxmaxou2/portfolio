const WORDS_PER_MINUTE = 200;

export const calculateReadTime = (content: string) => {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / WORDS_PER_MINUTE);
};
