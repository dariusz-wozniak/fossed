const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-4 px-6 mt-12 shadow-inner">
      <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} FOSSED. Navigating .NET library licensing changes. All rights reserved.</p>
        <div className="mt-3 flex justify-center space-x-4">
          <a
            href="https://ko-fi.com/A0A41B6EIP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 bg-[#72a4f2] text-white font-medium rounded-md hover:bg-[#5b93e8] transition-colors"
          >
            ☕ Support me on Ko-fi
          </a>
          <a
            href="https://github.com/dariusz-wozniak/fossed-public"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 bg-[#333] text-white font-medium rounded-md hover:bg-[#555] transition-colors"
          >
            <svg className="inline-block w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 