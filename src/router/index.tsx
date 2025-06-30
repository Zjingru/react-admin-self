import { createBrowserRouter } from "react-router-dom";
import LayoutPage from '../layout/index';
import Goods from '../views/curdProject/goods/index'
const routes = createBrowserRouter([
  {
    path: "/",
    element: (<LayoutPage></LayoutPage>),
    // loader: async () => {
    //   return fetch("/api/products"); // 自动处理Promise
    // },
    children: [
      {
        path: "/curdProject/goods",
        element: <Goods />,

        // loader: ({ params }) => fetch(`/api/products/${params.id}`)
      }
    ]
  }
]);
export default routes;
