import type { JSX, ReactElement } from "react";

import HomeCard from "../src/components/card/HomeCard";
import AboutScreen from "../src/screens/AboutScreen";
import ContactScreen from "../src/screens/ContactScreen";
import ProjectScreen from "../src/screens/ProjectScreen";

import { FaEnvelope, FaFolderOpen, FaHome, FaUser } from "react-icons/fa";


export type Links =
    "home" |
    "about" |
    "projects" |
    "contact";

export const pagesComponents: Record<Links, JSX.Element> = {
    home: <HomeCard />,
    about: <AboutScreen />,
    projects: <ProjectScreen />,
    contact: <ContactScreen />,
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
