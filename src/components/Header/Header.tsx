import { useContext } from 'react';
import { MovieContext } from '@/context/movie/MovieContext';
import { Slider, SliderProps, Slide } from '../Slider/index';
import { Card } from '../Card/Card';

export const Header = () => {
  const { data, isLoading, error } = useContext(MovieContext);

  console.log({ data });

  const settings: SliderProps = {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    speed: 1500,
  };

  return (
    <header className="h-screen">
      {isLoading && <div>Carregando...</div>}
      {error && <div>{error.message}</div>}

      <Slider settings={settings}>
        {!isLoading &&
          !error &&
          data?.slice(0, 5).map((listMovie) => (
            <Slide key={listMovie.id}>
              <div className="relative h-[100vh] overflow-hidden">
                <div
                  className="bg-cover bg-center bg-no-repeat h-full relative group"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${listMovie.backdrop_path})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-radial from-current via-black to-zinc-900 opacity-80"></div>
                  <div className="relative z-10">
                    <Card card={listMovie} />
                  </div>
                </div>
              </div>
            </Slide>
          ))}
      </Slider>
    </header>
  );
};
