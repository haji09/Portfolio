import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const FlickMaps = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Lorem <span className="text-textGreen tracking-wide">@Lorem</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">period of time</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          autem.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          pariatur!
        </li>
      </ul>
    </motion.div>
  );
};

export default FlickMaps;
