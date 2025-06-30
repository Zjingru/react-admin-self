// import { StrictMode } from 'react'
import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import './mock/index.js'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/index.tsx'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
