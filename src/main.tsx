// import { StrictMode } from 'react'
import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/common.css'
import './assets/css/theme.less'
import './assets/css/index.less'
import App from './App.tsx'
import './mock/index.js'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
      {/* <RouterProvider router={router} />
    </App> */}
  </React.StrictMode>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
