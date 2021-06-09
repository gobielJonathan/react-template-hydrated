import loadable from '@loadable/component'

// import Home from "./pages/home";
// import User from "./pages/user";

const Home = loadable(() => import("./pages/home"))
const User = loadable(() => import("./pages/user"))

export default [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/users",
        component: User,
        exact: true
    },
]