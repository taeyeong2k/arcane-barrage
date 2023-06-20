import dynamic from 'next/dynamic';

const DynamicGamePage = dynamic(
  () => import('./GamePage'), // replace this with the path to your GamePage file
  { ssr: false }  // this will disable server-side rendering for GamePage component
);

export default function Home() {
  // ...your other code...

  return (
    // ...your other JSX...

    <DynamicGamePage />

    // ...your other JSX...
  );
}
