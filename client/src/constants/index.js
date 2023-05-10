import { FaMagic, FaHandsHelping, FaCloudDownloadAlt } from "react-icons/fa"
import { AiFillExperiment, AiOutlineAntDesign } from "react-icons/ai"

export const headerRoutes = [
    {
        name: "features", path: "/"
    },
    {
        name: "templates", path: "/templates"
    },
    {
        name: "community", path: "/community"
    },
    {
        name: "pricing", path: "/pricing"
    },
    {
        name: "blog", path: "/blog"
    },
]

export const features = [
    { text: "Create and edit animations visually with just a few clicks", icon: FaMagic },

    {
        text: "Experiment with Framer Motion animations and transitions in an easy-to-use interface",
        icon: AiFillExperiment
    },
    { text: " A wide variety of pre-built templates and animations to help you get started quickly", icon: AiOutlineAntDesign },
    { text: "Collaborate with other developers to combine and refine ideas", icon: FaHandsHelping },
    {
        text: "Export your creations in one click and use them in your Framer Motion or React projects", icon: FaCloudDownloadAlt
    },
]