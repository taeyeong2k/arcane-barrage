import Link from 'next/link';

const MainPage = () => (
  <div className="relative flex items-center justify-center h-screen bg-cover" style={{ backgroundImage: "url('/assets/pxfuel.jpg')" }}>
    <div className="text-center text-white">
      <h1 className="text-6xl mb-4">Welcome to Arcane Barrage!</h1>
      <p className="text-2xl mb-8">Are you ready to test your skills and accuracy with Xerath&apos;s Arcane Barrage?</p>
      <Link href="/game">
        <button className="inline-block px-8 py-3 text-2xl text-white bg-red-500 rounded">Start Game</button>
      </Link>
    </div>
  </div>
);

export default MainPage;
