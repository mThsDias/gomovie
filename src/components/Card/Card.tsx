import { CardType } from './types';
import Image from 'next/image';

interface CardProps {
  card: CardType;
}

export const Card = ({ card }: CardProps) => {
  const { title, overview, poster_path } = card;
  return (
    <section className="flex items-center justify-between px-52 py-56 ">
      <div className="flex flex-col w-1/2 gap-20">
        <div className="text-white text-7xl font-bold">
          {title && <h1>{title}</h1>}
        </div>
        <div className="text-white text-lg font-semibold">
          {overview ? (
            <p>{overview}</p>
          ) : (
            <p>Infelizmente nao podemos obter os dados deste filme</p>
          )}
        </div>
        <div className="text-white font-bold text-2xl flex gap-5">
          <span className="border-none bg-lime-600 rounded-full px-10 py-2 hover:bg-lime-500 hover:text-zinc-950 cursor-pointer">
            Assistir
          </span>
          <span className="border-none bg-lime-600 rounded-full px-10 py-2 hover:bg-lime-500 hover:text-zinc-950 cursor-pointer">
            Trailer
          </span>
        </div>
      </div>
      <div>
        {poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="Post"
            width={0}
            height={0}
            priority={true}
            loading="eager"
            sizes="100vw 100vh"
            className="min-w-96 min-h-96 rounded-md shadow-2xl"
          />
        )}
      </div>
    </section>
  );
};
