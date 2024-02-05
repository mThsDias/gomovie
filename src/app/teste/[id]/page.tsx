'use client';
import useAxios from '@/hooks/useAxios';
import { Media } from '@/types/types';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Teste() {
  const { id } = useParams();

  // const [movie, setMovie] = useState<Media | null>();

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=dcf6fe444e49bcbe4d8f215076000be9&language=pt-BR`
  //     )
  //     .then((res) => {
  //       setMovie(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [id]);

  // console.log(movie);

  const { data, error, isLoading } = useAxios<Media | null>(
    `movie/${id}?api_key=dcf6fe444e49bcbe4d8f215076000be9&language=pt-BR`
  );
  console.log(data);

  return (
    <>
      <h1>{data?.title}</h1>
    </>
  );
}
