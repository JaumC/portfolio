import { IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
import { Skeleton } from "../components/skeleton/Skeleton";
import { FaBox } from "react-icons/fa";
import ControlePatrimonio from "./controlePatrimonio/ControlePatrimonio";

export const projects = [
  {
    title: "Controle de Patrimônio",
    short_description: "Aplicação web-mobile para o gerenciamento dos patrimônios das defensorias.",
    header: "/image.png",
    stacks: ["/node.svg", "/react.svg 30px", "/typescript.svg 20px", "/docker.svg 25px", "/sqlserver.svg 30px", "/tailwind.svg 30px", "figma.svg 30px"],
    className: "md:col-span-2",
    icon: <FaBox className="h-4 w-4" />,
    children: <ControlePatrimonio />
  },
  {
    title: "Eclipse",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4" />,
  },
  {
    title: "Nebula",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4" />,
  },
  {
    title: "Melloapp",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4" />,
  },
  {
    title: "Leshmapp",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4" />,
  },
  {
    title: "Meau",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4" />,
  },
];