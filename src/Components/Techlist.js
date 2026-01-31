import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { SiRazorpay } from "react-icons/si";


export const TechList = [
    {
        icon : <FaHtml5 className=" text-orange-500 " />,
        name : "HTML5",
    },
    {
        icon : <DiCss3 className="text-blue-500" />,
        name : "CSS3",
    },
    {
        icon : <FaJsSquare className="text-yellow-400" />,
        name : "JAVASCRIPT",
    },
    {
        icon : <RiTailwindCssFill className="text-cyan-400 " />,
        name : "TAILWIND CSS",
    },
    {
        icon : <FaReact className="text-blue-400" />,
        name : "REACT JS",
    },
    {
        icon : <FaNodeJs className="text-green-500 " />,
        name : "NODE JS",
    },
    {
        icon : <SiExpress className="text-gray-400" />,
        name : "EXPRESS",
    },
    {
        icon : <SiFirebase className="text-yellow-500" />,
        name : "FIREBASE",
    },
    {
        icon : <SiMongodb className="text-green-600" />,
        name : "MONGODB",
    },
    {
        icon : <SiClerk className="text-indigo-500" />,
        name : "CLERK",
    },
    {
        icon : <SiRazorpay className="text-blue-600" />,
        name : "RAZORPAY",
    },
    {
        icon : <FaGithub className="text-gray-100" />,
        name : "GITHUB",
    },
]