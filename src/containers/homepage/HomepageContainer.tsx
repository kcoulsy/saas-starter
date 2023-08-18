'use client';

import HomepageNav from '../../components/homepage/HomepageNav/HomepageNav';

const HomepageContainer = () => {
  return (
    <div>
      <HomepageNav />
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">test</h1>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">Hey!</div>
      </main>
    </div>
  );
};

export default HomepageContainer;
