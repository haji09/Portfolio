import {TbBrandGithub} from "react-icons/tb";
import {SiGmail} from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className="flex flex-col gap-4">
            <a href="https://github.com" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <TbBrandGithub />
                </span>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SiGmail />
                </span>
            </a>
            <a href="https://linkedin.com" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialLinkedin />
                </span>
            </a>
        </div>
        <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide