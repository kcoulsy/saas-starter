import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '../../common/button/Button';

const HomepageNav = () => {
  const router = useRouter();
  const [_, setMobileNavOpen] = useState(false);

  return (
    <nav className="w-full border-b">
      <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
        <div aria-label="Home. logo" role="img">
          {/* <img
            className="w-12 md:w-auto"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centre_aligned_simple-Svg1.svg"
            alt="logo"
          /> */}
        </div>
        <div>
          <button
            type="button"
            className="dark:bg-white rounded sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setMobileNavOpen((s) => !s)}
          >
            <svg
              aria-haspopup="true"
              aria-label="open Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden icon icon-tabler icon-tabler-menu"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </button>
          <div id="menu" className="md:block lg:block hidden">
            <button
              type="button"
              className="dark:bg-white rounded block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6"
              onClick={() => setMobileNavOpen((s) => !s)}
            >
              <svg
                aria-label="close main menu"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                Feature
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                Marketplace
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                Company
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                Features
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Button label="Sign In" type="button" classes="px-4" onClick={() => router.push('/login')} />
        </div>
      </div>
    </nav>
  );
};

export default HomepageNav;
