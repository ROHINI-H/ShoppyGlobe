import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'

// Performance Optimatization by lazy-loading
const ProductList = lazy(() => import('./Components/ProductList.jsx'))
const ProductDetail = lazy(() => import('./Components/ProductDetail.jsx'))
const Cart = lazy(() => import("./Components/Cart.jsx"))
const Checkout = lazy(() => import('./Components/Checkout.jsx'))
const NotFound = lazy(() => import('./Components/NotFound.jsx'))

// create the router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
