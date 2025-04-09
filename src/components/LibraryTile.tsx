import Link from 'next/link';

interface LibraryTileProps {
  name: string;
  slug: string;
  description: string;
}

const LibraryTile: React.FC<LibraryTileProps> = ({ name, slug, description }) => {
  return (
    <Link href={`/library/${slug}`}>
      <div className="flex flex-col p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 h-[220px]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400">{name}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export default LibraryTile; 