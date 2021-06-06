import React, { lazy, Suspense } from 'react'
import { StaticRouter as Router, Route, Switch } from 'react-router-dom'
import Provider from './context/index.context'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './pages/home'
import Login from './Login'

// const Login = lazy(() => import('./Login'))
// const Home = lazy(() => import('./pages/home'))

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default () => {
  return (
    <QueryClientProvider client={client}>
      <Provider>
        <Router>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Login} path="/login" exact />
          </Switch>
        </Router>
      </Provider>
    </QueryClientProvider>
  )
}