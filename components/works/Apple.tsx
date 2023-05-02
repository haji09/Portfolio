import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"

const FlickMaps = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}}
    className="w-full">
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Graphic Designer <span className="text-textGreen tracking-wide">@Apple</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">Mar 2021 - Dec 2021</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                My role was to create 2D and 3D layouts of sites for US real
estate industries.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                My role was to create 2D and 3D layouts of sites for US real
estate industries.
            </li>
        </ul>
    </motion.div>
  )
}

export default FlickMaps