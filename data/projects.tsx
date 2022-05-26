import { FaFileMedicalAlt } from "react-icons/fa";
import { GiPortugal } from "react-icons/gi";
import { SiServerless } from "react-icons/si";

export const projects = [
  {
    icon: <GiPortugal className="w-8 h-8 text-gray-900" />,
    name: "Awesome Portugal Data",
    description: "Curated list of Portuguese datasets and open APIs.",
    href: "https://github.com/rgllm/awesome-portugal-data/",
  },
  {
    icon: <FaFileMedicalAlt className="w-8 h-8 text-gray-900" />,
    name: "XNATUM",
    description: "Python client to interact with XNAT",
    href: "https://pypi.org/project/xnatum/",
  },
  {
    icon: <SiServerless className="w-8 h-8 text-gray-900" />,
    name: "Serverless Portuguese Utils",
    description:
      "A set of useful utils to validate Portuguese data using Cloudflare Workers.",
    href: "https://github.com/rgllm/serverless-portuguese-utils/",
  },
];
