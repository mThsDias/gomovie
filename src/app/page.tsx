'use client';

import { Header } from '@/components/Header/Header';
import { MovieProvider } from '@/context/movie/MovieContext';

export default function Home() {
  return (
    <main className="min-h-screen bg-red-500">
      <MovieProvider>
        <Header />
      </MovieProvider>
    </main>
  );
}
