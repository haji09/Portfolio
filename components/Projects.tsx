import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import { estore, upcomingProject, weather } from '@/public/assets';
import { TbBrandGithub } from 'react-icons/tb';
import { TfiNewWindow } from 'react-icons/tfi';

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some things I have built" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/*project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://haji-estore.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={estore}
                  alt="estore"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">E-store</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                This is an E-commerce website (E-store) build using NextJs which
                includes dynamic routing, image optimization and Next Auth
                packages to authenticate customers and admin users, MongoDB and
                Mongoose to save and retrieve data like products, orders and
                users, Tailwind CSS framework to build responsive website using
                custom theme, animation and carousel, PayPal developer api to
                make online payment and finally, deployed in Vercel.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>JavaScript</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/haji09/estore-nextjs"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://haji-estore.vercel.app/"
                  target="_blank"
                >
                  <TfiNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://haji-weather.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={weather}
                  alt="weather-pic"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Weather Forecast</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                This is a weather forecast application, build using NextJs which
                includes react hooks, fecthing data through openweatherapi,
                Tailwind CSS for responsive design, which shows weather of a
                city and also the current location weather and finally deployed
                in vercel.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>JavaScript</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/haji09/weather-next-app"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://haji-weather.vercel.app/"
                  target="_blank"
                >
                  <TfiNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="#"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={upcomingProject}
                  alt="upcomingProject"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Upcoming Project</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae molestias doloribus, corporis asperiores cupiditate
                nihil quia repellendus similique quae aspernatur!
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>TypeScript</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com"
                  target="_blank"
                >
                  <TfiNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
