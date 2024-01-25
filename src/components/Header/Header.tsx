import { useContext } from 'react';
import { MovieContext } from '@/context/movie/MovieContext';
import Image from 'next/image';

export const Header = () => {
  const { data, isLoading, error } = useContext(MovieContext);

  return (
    <header>
      {isLoading && <div>Carregando...</div>}
      {error && <div>{error.message}</div>}
      {!isLoading &&
        !error &&
        data?.map((listMovie) => (
          <ul key={listMovie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${listMovie.poster_path}`}
              alt="Poster"
              width={142}
              height={142}
            />
            <li>{listMovie.title}</li>
          </ul>
        ))}
    </header>
  );
};
