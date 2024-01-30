export interface MovieProviderProps {
  children: ReactNode;
}

export interface ContextValue {
  data: Media[] | undefined;
  error: Error | undefined;
  isLoading: boolean;
}

export interface Media {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  first_air_date: string;
  tagline: string;
  genres: Genres[];
  runtime: number;
  homepage: string;
  backdrop_path: string;
}

export interface Movie extends Media {}

export interface Serie extends Media {}

type StateProps<T> = {
  data?: T;
  error: Error | undefined;
  isLoading: boolean;
};

type ActionProps<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };
