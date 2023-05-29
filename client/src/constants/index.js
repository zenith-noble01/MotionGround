import { FaMagic, FaHandsHelping, FaCloudDownloadAlt } from "react-icons/fa"
import { AiFillExperiment } from "react-icons/ai"
import { RxButton, RxText } from "react-icons/rx"
import { BsImage, BsInputCursorText } from "react-icons/bs"
import reactCSS from "reactcss"

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
    {
        name: "Playground", path: "/playground"
    },
]

export const features = [
    { text: "Create and edit animations visually with just a few clicks", icon: FaMagic },

    {
        text: "Experiment with Framer Motion animations and transitions in an easy-to-use interface",
        icon: AiFillExperiment
    },
    { text: "Collaborate with other developers to combine and refine ideas", icon: FaHandsHelping },
    {
        text: "Export your creations in one click and use them in your Framer Motion or React projects", icon: FaCloudDownloadAlt
    },
]

export const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
        enabled: true,
    },
    scrollbar: {
        horizontalSliderSize: 4,
        verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
};

export const baseElements = [
    {
        name: "text",
        icon: RxText
    },
    {
        name: "image",
        icon: BsImage
    },
    {
        name: "button",
        icon: RxButton
    },
    {
        name: "input",
        icon: BsInputCursorText
    },

]


export const annimationTypes = [
    {
        name: ""
    },
    {
        name: "Text Variants"
    },
    {
        name: "Fade In"
    },
    {
        name: "Slide In"
    },
    {
        name: "Zoom In"
    },
]


export const directions = [
    {
        name: ""
    },
    {
        name: "up"
    },
    {
        name: "right"
    },
    {
        name: "down"
    },
    {
        name: "left"
    },
]


export const types = [
    {
        name: ""
    },
    {
        name: "tween"
    },
    {
        name: "spring"
    },
]


