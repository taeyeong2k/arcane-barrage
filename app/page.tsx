import Link from 'next/link';

const MainPage = () => (
  <div>
    <h1>Welcome to Arcane Barrage!</h1>
    <p>Are you ready to test your skills and accuracy with Xerath's Arcane Barrage?</p>
    <Link href="/game">Start Game</Link>
  </div>
);

export default MainPage;
