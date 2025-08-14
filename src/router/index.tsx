import { createBrowserRouter ,redirect} from "react-router-dom";
import React from 'react';
import LayoutPage from '../layout/index';
import Goods from '../views/curdProject/goods/index'
import Home from '../views/home/index'
import List from '@/views/curdProject/list/index'
const protectedLoader = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    // 如果没有 token，重定向到登录页
    return;
  }
  // 如果有 token，允许继续访问
  return redirect('/');
};
const routes = createBrowserRouter([
  {
    path: "/",
    element: (<LayoutPage></LayoutPage>),
    // loader: () => redirect('/home'),
    // redirect:'/home',
    // loader: async () => {
    //   return fetch("/api/products"); // 自动处理Promise
    // },
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: "/curdProject/goods",
        element: <Goods />,
        // loader: ({ params }) => fetch(`/api/products/${params.id}`)
      }, {
        path: '/curdProject/list',
        element: <List />
      }, {
        path: '/curdProject/todolist',
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            {React.createElement(React.lazy(() => import('../views/curdProject/todolist/index')))}
          </React.Suspense>
        )
      }
    ]
  }, {
    path: '/login',
    loader: protectedLoader,
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        {React.createElement(React.lazy(() => import('../views/login/index')))}
      </React.Suspense>
    )
  }
]);

export default routes;
