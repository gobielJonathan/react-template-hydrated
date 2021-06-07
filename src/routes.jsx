import Home from "./pages/home";
import Login from "./pages/login";

export default [
    {
        path : "/login",
        render : props =>  <Login {...props} />,
        exact : true
    },

    {
        path : "/",
        render : props =>  <Home {...props} />,
        exact : true
    },
]