const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto text-center">
        
        {/* The "Drop a line" Section */}
        <p className="text-lg font-medium text-gray-900 dark:text-gray-300">
          Have a question or just want to say hi?
        </p>
        <a 
          href="mailto:contact@maxencerossignol.com" 
          className="inline-block mt-2 text-xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors border-b-2 border-blue-600 dark:border-blue-400 hover:border-blue-800 dark:hover:border-blue-300"
        >
          Drop me a line
        </a>

        {/* The Copyright Section */}
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Maxence Rossignol. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
