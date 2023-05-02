import React from 'react'
import SectionTitle from './SectionTitle'
import {TbPoint} from "react-icons/tb";
import Image from 'next/image';
import { myPic } from '@/public/assets';

const About = () => {
  return (
    <section id="about"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <SectionTitle title="About Me" />
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                <p>
                After graduation, I cleared two times INET (Indian Navy Entrance Test)
and once UPSC CDS (Combined Defense Service) exam. After that, I
worked as a graphic designer for some duration, and after this, I want
to look forward to the career, I have learned web development and
made a portfolio website using Next.js which includes some projects
and I am currently looking for a front-end web developer role.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eum suscipit dolorem atque quidem nobis quo eaque nesciunt iusto possimus enim, ratione nemo aut sapiente molestiae. Placeat, quaerat! Quidem, quo!
                </p>
                <p>Here are a few technologies I have been working with recently:</p>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbPoint />
                        </span>
                        JavaScript
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbPoint />
                        </span>
                        Next.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbPoint />
                        </span>
                        React
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbPoint />
                        </span>
                        TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbPoint />
                        </span>
                        Tailwindcss
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbPoint />
                        </span>
                        HTML and CSS
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbPoint />
                        </span>
                        Python
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbPoint />
                        </span>
                        Adobe Creative Suite
                    </li>
                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
                <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                    <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                       <Image className="rounded-lg h-full object-cover"
                       src={myPic}
                       alt="myPic"/> 
                       <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                    </div>
                </div>
                <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
            </div>
        </div>
    </section>
  )
}

export default About