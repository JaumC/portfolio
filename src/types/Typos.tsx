import type { JSX, ReactElement } from "react";

import { FaEnvelope, FaFolderOpen, FaHome, FaUser } from "react-icons/fa";
import HomeCard from "../components/card/HomeCard";
import AboutScreen from "../screens/AboutScreen";
import ProjectScreen from "../screens/ProjectScreen";
import ContactScreen from "../screens/ContactScreen";


export type Links =
    "home" |
    "about" |
    "projects" |
    "contact";

export const pagesComponents: Record<string, (props: { scrollRef?: React.RefObject<HTMLDivElement | null> }) => JSX.Element> = {
  home: () => <HomeCard />,
  about: () => <AboutScreen />,
  projects: () => <ProjectScreen />,
  contact: ({ scrollRef }) => <ContactScreen scrollRef={scrollRef} />,
}

export const iconsLinks: Record<Links, ReactElement> = {
    home: <FaHome size={19}/>,
    about: <FaUser size={16}/>,
    projects: <FaFolderOpen size={18}/>,
    contact: <FaEnvelope size={16}/>,
}

export const pages: { id: Links; bg: string }[] = [
  { id: "home", bg: "#121317" },
  { id: "about", bg: "#ffffff" },
  { id: "projects", bg: "#121317" },
  { id: "contact", bg: "#ffffff" },
]
