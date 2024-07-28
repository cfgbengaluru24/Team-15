import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-red-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
        <div className="inline-flex items-center space-x-2">
          <span>
          <div className="mb-6 md:mb-0">
            <img src="https://pbs.twimg.com/profile_images/1276595758934953990/NbHzzi7h_400x400.jpg" className="h-10 me-3" alt="Expa Logo" />
          </div>
          </span>
          <span className="font-bold text-white text-lg">EXPA India</span>
        </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Educate</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Manage</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.instagram.com/cadet_expa_india/?hl=en" className="hover:underline">Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCdXrGifpsSqV8nc7Ss15IcQ" className="hover:underline">YouTube</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;