const Hero = () => {
  return (
    <div className="relative bg-white py-10">
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-1/2 flex flex-col justify-center">
          <div className="hero-content">
            <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
              Kickstart Startup Website with TailGrids
            </h1>
            <p className="mb-8 max-w-[480px] text-base text-body-color">
              With TailGrids, business and students thrive together. Business can perfectly match their staffing to
              changing demand throughout the dayed.
            </p>
            <ul className="flex flex-wrap items-center">
              <li>
                <a
                  href="/#"
                  className="px-4 text-sm font-semibold leading-none text-white focus:outline-none flex justify-center items-center h-10 w-full bg-indigo-700 border rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <div className="lg:ml-auto lg:text-right">
            <div className="relative z-10 inline-block pt-11 lg:pt-0">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                alt="hero"
                className="max-w-full lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
