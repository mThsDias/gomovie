'use client';

import { Header } from '@/components/Header/Header';
import { MovieProvider } from '@/context/movie/MovieContext';

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-400">
      <MovieProvider>
        <Header />
      </MovieProvider>
      <div className="h-screen bg-red-500 ">Main</div>
    </main>
  );
}
