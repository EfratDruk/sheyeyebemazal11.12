import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing.tsx'
import { store } from './store.ts'

// ReactDOM.createRoot(document.getElementById('root')!).render(
createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
   <StrictMode>
    <BrowserRouter>

    <Routing/>

    </BrowserRouter>
  </StrictMode>
  </Provider>
)
