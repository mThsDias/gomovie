import { createContext } from 'react';
import { MovieProviderProps, ContextValue } from '@/types/types';
import useAxios from '@/hooks/useAxios';

export const MovieContext = createContext({} as ContextValue);

export function MovieProvider({ children }: MovieProviderProps) {
  const { data, error, isLoading } = useAxios(
    'discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc'
  );

  return (
    <MovieContext.Provider value={{ data, error, isLoading }}>
      {children}
    </MovieContext.Provider>
  );
}
