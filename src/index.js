import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { loadableReady } from '@loadable/component'
import { ApolloProvider } from '@apollo/client'
import { client } from './api/graphql'

// loadableReady(() => {
//     hydrate(
//         <ApolloProvider client={client}>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </ApolloProvider>
//         , document.getElementById("app"))
// })
render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
    , document.getElementById("app"))