import loadable from '@loadable/component'

// import Home from "./pages/home";
// import User from "./pages/user";

const Home = loadable(() => import("./pages/home"))
const User = loadable(() => import("./pages/user"))
const Currency = loadable(() => import("./pages/currency"))

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
    {
        path: "/currency",
        component: Currency,
        exact: true
    },
]