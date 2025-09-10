import { IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
import { Skeleton } from "../components/skeleton/Skeleton";
import { FaBox } from "react-icons/fa";

export const projects = [
  {
    title: "Controle de Patrimônio",
    short_description: "Aplicação web-mobile para o gerenciamento dos patrimônios das defensorias.",
    description: "Aplicação web-mobile para o gerenciamento dos patrimônios das defensorias, validação de qr codes entre outros.",
    header: "/image.png",
    className: "md:col-span-2",
    icon: <FaBox className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Eclipse",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Nebula",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Melloapp",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Leshmapp",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Meau",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];