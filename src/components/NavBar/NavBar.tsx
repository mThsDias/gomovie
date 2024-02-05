import Image from 'next/image';
import Link from 'next/link';
import icon from '../../assets/icon.png';

export const NavBar = () => {
  return (
    <nav className=" w-full absolute z-10 py-16 px-52 justify-between flex items-center max-lg:px-16  max-sm:px-5">
      <div className="flex items-center gap-3">
        <Image
          src={icon}
          alt="Logo da goMovie"
          width={56}
          height={56}
          priority
        />
        <div className="flex flex-col text-white text-3xl font-bold leading-8 max-sm:text-base">
          <span>GO</span>
          <span>Movie</span>
        </div>
      </div>
      <ul className="flex items-center gap-10 text-white text-3xl font-bold max-sm:text-sm">
        <Link href={'/'}>
          <li className=" hover:border-b-2 border-red-500 cursor-pointer max-sm:px-3 max-sm:py-1">
            Home
          </li>
        </Link>
        <Link href={'/movie'}>
          <li className="hover:border-b-2 border-red-500 cursor-pointer max-sm:px-3 max-sm:py-1">
            Filmes
          </li>
        </Link>
        <Link href={'/serie'}>
          <li className="hover:border-b-2 border-red-500 cursor-pointer max-sm:px-3 max-sm:py-1">
            Séries
          </li>
        </Link>
      </ul>
    </nav>
  );
};
