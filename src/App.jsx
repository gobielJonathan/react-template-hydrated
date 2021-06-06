import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Provider from './context/index.context'
import { QueryClient, QueryClientProvider } from 'react-query'

const App = lazy(() => import('./App'))
const Login = lazy(() => import('./Login'))

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default () => {
  return <QueryClientProvider client={client}>
    <Provider>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Route component={App} path="/" exact />
          <Route component={Login} path="/login" exact />
        </Suspense>
      </Router>
    </Provider>
  </QueryClientProvider>
}