import Hero from '@src/app/(marketing)/(homepage)/_components/Hero/Hero';

export async function generateMetadata() {
  return {
    // TODO: add to translation files
    title: 'Homepage',
    description: 'Description',
  };
}

export default function HomePage() {
  return (
    <>
      {' '}
      <Hero />
    </>
  );
}
