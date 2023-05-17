
import { lazy } from "react"

const LandingPage = lazy(() => import("./LandingPage"))
const Register = lazy(() => import("./Register"))
const Login = lazy(() => import("./Login"))
const Activation = lazy(() => import("./Activation"))
const Playground = lazy(() => import("./Playground"))
const Editor = lazy(() => import("./Editor"))

export {
    LandingPage, Register, Login, Activation, Playground, Editor
}