import Image from 'next/image';
import Link from 'next/link';
import icon from '../../assets/icon.png';

export const NavBar = () => {
  return (
    <nav className="bg-zinc-800 py-16 px-52 flex justify-between items-center max-md:px-16 max-sm:px-5">
      <div className="flex items-center gap-3">
        <Image
          src={icon}
          alt="Logo da goMovie"
          width={56}
          height={56}
          priority
        />
        <div className="flex flex-col text-white text-2xl font-bold leading-6 max-sm:text-base">
          <span>GO</span>
          <span>Movie</span>
        </div>
      </div>
      <ul className="flex items-center gap-5 text-white text-lg font-medium max-sm:text-sm">
        <Link href={'/movie'}>
          <li className="border-none bg-lime-600 rounded-full px-5 py-1.5 hover:bg-lime-500 hover:text-zinc-950 cursor-pointer max-sm:px-3 max-sm:py-1">
            Filmes
          </li>
        </Link>
        <Link href={'/serie'}>
          <li className="border-none bg-lime-600 rounded-full px-5 py-1.5 hover:bg-lime-500 hover:text-zinc-950 cursor-pointer max-sm:px-3 max-sm:py-1">
            Séries
          </li>
        </Link>
      </ul>
    </nav>
  );
};
