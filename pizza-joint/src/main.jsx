import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Base, Order, Toppings } from './components/index.js'
import { store } from '../app/store.js'
import { Provider } from 'react-redux'
 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/base',
//         element: <Base />
//       },
//       {
//         path: '/toppings', 
//         element: <Toppings />
//       },
//       {
//         path: '/order',
//         element: <Order />
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
