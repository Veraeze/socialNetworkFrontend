import Register from "../Register";
import Login from "../Login";
import Layout from "../components/layout";
import Home from "../features/Home";
 export const Routes = [
    {
         path: "/login",
         element: <Login/>
    },
    {
         path: "/register",
         element: <Register/>,
    },
     {
         path: "/layout",
         element: <Layout/>,
         children: [
             {
                 path: "",
                 element:<Home/>
             }

         ]
     }

]
