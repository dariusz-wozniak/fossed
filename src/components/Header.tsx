import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-gray-900 dark:text-white">F/OSS License Tracker</span>
          {/* Placeholder for logo */}
        </Link>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
            Tracking the changing landscape of .NET library licenses.
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header; 