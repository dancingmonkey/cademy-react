import React from 'react';
import { HomeIcon } from '@heroicons/react/solid';

const info = {
  welcome: 'Welcome',
  intro: 'This repo contains code used in the free CodeCademy react course, and is configured with tailwindcss for super quick style changes',
  features: [
    'React 18',
    'Prettier-plugin-tailwindcss',
    'Open Sans font',
    'Extended colors',
  ],
};

const Welcome = () => {
  const list = info.features;

  return (
    <div className="mx-auto mt-32 max-w-lg rounded-sm bg-primary bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-1 font-sans text-white">
      <div className="h-full w-full rounded-sm bg-primary p-4">
        <div className="flex items-center justify-start">
          <h1 className="mb-2 mr-2 text-4xl font-bold">{info.welcome}</h1>
          <HomeIcon className="mb-1 h-7 w-7 text-secondary" />
        </div>

        <hr className="text-secondary" />
        <p className="mt-4 text-lg">
          {info.intro}
        </p>

        <ul className="ml-4 mt-4 list-disc text-lg">
          {list.map(x => {
            return (
              <li
                key={x}
                className="cursor-pointer text-primaryLight hover:text-white">
                {x}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Welcome;
