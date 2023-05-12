
import { lazy } from "react"

const LandingPage = lazy(() => import("./LandingPage"))
const Register = lazy(() => import("./Register"))
const Login = lazy(() => import("./Login"))

export { LandingPage, Register, Login }