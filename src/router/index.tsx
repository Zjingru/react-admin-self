import { createBrowserRouter } from "react-router-dom";
import LayoutPage from '../layout/index';
import Goods from '../views/curdProject/goods/index'
import Home from '../views/home/index'
import List from '@/views/curdProject/list/index'
const routes = createBrowserRouter([
  {
    path: "/",
    element: (<LayoutPage></LayoutPage>),
    // redirect:'/home',
    // loader: async () => {
    //   return fetch("/api/products"); // 自动处理Promise
    // },
    children: [
      {
        path:'/home',
        element:<Home />
      },
      {
        path: "/curdProject/goods",
        element: <Goods />,

        // loader: ({ params }) => fetch(`/api/products/${params.id}`)
      } ,{
        path:'/curdProject/list',
        element:<List />
      }
    ]
  }
]);
export default routes;
