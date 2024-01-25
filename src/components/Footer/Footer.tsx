import Image from 'next/image';
import icon from '../../assets/icon.png';

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-16 px-52 text-white text-sm max-lg:px-40 max-sm:px-0">
      <div className="flex items-center justify-between max-md:flex-col max-md:gap-10 max-md:text-center">
        <div className="flex items-center gap-5">
          <Image
            src={icon}
            alt="Logo da goMovie"
            width={42}
            height={42}
            priority
          />
          <div className="flex flex-col text-white text-2xl font-bold leading-6 max-md:text-left max-sm:text-xl max-sm:font-semibold">
            <span>GO</span>
            <span>Movie</span>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>Contact us</li>
            <li>Term of services</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>Live</li>
            <li>FAQ</li>
            <li>Premium</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
