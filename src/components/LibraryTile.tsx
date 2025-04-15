import Link from 'next/link';

interface LibraryTileProps {
  name: string;
  slug: string;
  description: string;
}

const LibraryTile: React.FC<LibraryTileProps> = ({ name, slug, description }) => {
  return (
    <Link href={`/library/${slug}`} className="w-full">
      <div className="flex flex-col p-3 sm:p-4 md:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 h-[160px] sm:h-[180px] md:h-[220px] w-full">
        <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400">{name}</h5>
        <p className="font-normal text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export default LibraryTile; 