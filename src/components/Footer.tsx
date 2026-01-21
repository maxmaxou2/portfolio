const Footer = () => {
  return (
    <footer className="w-full py-6 mt-20 border-t border-gray-800">
      <div className="container mx-auto text-center">
        
        <p className="text-lg font-medium text-gray-300">
          Want to chat about anything? <a href="mailto:contact@maxencerossignol.com" className="text-lg text-gray-300 hover:text-blue-300 transition-colors border-b-2 border-gray-300 hover:border-blue-300">Contact me</a>
        </p>

        <div className="mt-8 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Maxence Rossignol. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
