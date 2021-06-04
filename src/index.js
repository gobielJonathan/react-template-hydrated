import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const App = lazy(() => import('./App'))
const Login = lazy(() => import('./Login'))

ReactDOM.render(
    <Router>
        <Suspense fallback={<p>Loading...</p>}>
            <Route component={App} path="/" exact />
            <Route component={Login} path="/login" exact />
        </Suspense>
    </Router>
    , document.getElementById("app"))