import Hero from '@src/components/homepage/Hero/Hero';

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
