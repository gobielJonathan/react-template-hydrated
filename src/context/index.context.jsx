import React from 'react'
import AuthProvider from "./auth.context";

export default function Provider({
    children
}) {
    return <AuthProvider>
        {children}
    </AuthProvider>
}