import Link from 'next/link';

export default function serie() {
  return (
    <main className="min-h-screen bg-red-500">
      <h1>Serie</h1>
      <span className="text-green-400">
        <Link href={'/'}>Voltar</Link>
      </span>
    </main>
  );
}
