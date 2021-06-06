import { createContext, useState } from "react";

export const AuthContext = createContext({
    auth: false,
    setAuth : (auth) => {}
})

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false)

    return <AuthContext.Provider value={{ auth , setAuth}}>
        {children}
    </AuthContext.Provider>
}