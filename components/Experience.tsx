import React, { useState} from 'react'
import SectionTitle from './SectionTitle'
import FlickMaps from './works/FlickMaps'
import Google from './works/Google'
import Apple from './works/Apple'



const Experience = () => {
    const [workFlickMaps, setWorkFlickMaps] = useState(true);
    const [workGoogle, setWorkGoogle] = useState(false);
    const [workApple, setWorkApple] = useState(false);

    const handleFlickMaps = ()=> {
        setWorkFlickMaps(true);
        setWorkGoogle(false);
        setWorkApple(false);
    }
    const handleGoogle = ()=> {
        setWorkFlickMaps(false);
        setWorkGoogle(true);
        setWorkApple(false);
    }
    const handleApple = ()=> {
        setWorkFlickMaps(false);
        setWorkGoogle(false);
        setWorkApple(true);
    }

  return (
    <section id="experience"
    className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
        <SectionTitle title="Where I have worked" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
            <ul className="md:w-32 flex flex-col">
                <li onClick={handleFlickMaps} 
                className={`${
                    workFlickMaps
                    ? " border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                    FlickMaps
                </li>
                <li onClick={handleGoogle}
                    className={`${
                        workGoogle
                        ? " border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                    } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                    Google
                </li>
                <li onClick={handleApple}
                    className={`${
                        workApple
                        ? " border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                    } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}> 
                    Apple
                </li>
            </ul>
            {workFlickMaps && <FlickMaps />}
            {workGoogle && <Google />}
            {workApple && <Apple />}
        </div>
    </section>
  )
}

export default Experience