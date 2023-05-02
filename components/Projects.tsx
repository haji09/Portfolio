import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { amazon } from '@/public/assets'
import {TbBrandGithub} from "react-icons/tb"
import {TfiNewWindow} from "react-icons/tfi"

const Projects = () => {
  return (
    <section id="project" 
    className="max-w-container mx-auto lgl:px-20 py-24">
        <SectionTitle title="Some things I have built" />
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
          {/*project 1 */}
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a className="w-full xl:w-1/2 h-auto relative group"
              href="https://www.amazon.in/" target="_blank">
              <div>
                <Image className="w-full h-full object-contain"
                src={amazon} alt="amazon" />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias doloribus, corporis asperiores cupiditate nihil quia repellendus similique quae aspernatur!
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>TypeScript</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a className="hover:text-textGreen duration-300" href="https://github.com" target="_blank">
                <TbBrandGithub />
                </a>
                <a className="hover:text-textGreen duration-300" href="https://github.com" target="_blank">
                <TfiNewWindow />
                </a>
              </div>
            </div>
          </div> 
          </div>
          {/*project 2 */}
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            <div className="flex flex-col xl:flex-row-reverse gap-6">
              <a className="w-full xl:w-1/2 h-auto relative group"
                href="https://www.amazon.in/" target="_blank">
                <div>
                  <Image className="w-full h-full object-contain"
                  src={amazon} alt="cyber" />
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
                </p>
                <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias doloribus, corporis asperiores cupiditate nihil quia repellendus similique quae aspernatur!
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>Nextjs</li>
                  <li>TypeScript</li>
                  <li>Vercel Deployment</li>
                </ul>
              <div className="text-2xl flex gap-4">
                <a className="hover:text-textGreen duration-300" href="https://github.com" target="_blank">
                  <TbBrandGithub />
                </a>
                <a className="hover:text-textGreen duration-300" href="https://github.com" target="_blank">
                  <TfiNewWindow />
                </a>
              </div>
              </div>
            </div> 
          </div>
          {/*project 3 */}
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            <div className="flex flex-col xl:flex-row gap-6">
              <a className="w-full xl:w-1/2 h-auto relative group"
                href="https://www.amazon.in/" target="_blank">
                <div>
                  <Image className="w-full h-full object-contain"
                  src={amazon} alt="amazon" />
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
                </p>
                <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias doloribus, corporis asperiores cupiditate nihil quia repellendus similique quae aspernatur!
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>Nextjs</li>
                  <li>TypeScript</li>
                  <li>Vercel Deployment</li>
                </ul>
              <div className="text-2xl flex gap-4">
                <a className="hover:text-textGreen duration-300" href="https://github.com" target="_blank">
                  <TbBrandGithub />
                </a>
                <a className="hover:text-textGreen duration-300" href="https://github.com" target="_blank">
                  <TfiNewWindow />
                </a>
              </div>
              </div>
            </div> 
          </div>
        </div>
    </section>
  )
}

export default Projects