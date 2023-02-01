import Head from 'next/head';
import GameIntroSection from '../components/marketing/GameIntroSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex h-full max-w-4xl flex-col items-center">
        <GameIntroSection></GameIntroSection>
      </main>
    </div>
  );
}
