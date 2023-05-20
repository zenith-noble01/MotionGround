
import { lazy } from "react"

const LandingPage = lazy(() => import("./LandingPage"))
const Register = lazy(() => import("./Register"))
const Login = lazy(() => import("./Login"))
const Activation = lazy(() => import("./Activation"))
const Playground = lazy(() => import("./Playground"))
const Editor = lazy(() => import("./Editor"))
const Test = lazy(() => import("./Test"))

export {
    LandingPage, Register, Login, Activation, Playground, Editor, Test
}