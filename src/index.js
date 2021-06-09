import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { loadableReady } from '@loadable/component'

loadableReady(() => {
    hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        , document.getElementById("app"))
})
// render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//     , document.getElementById("app"))