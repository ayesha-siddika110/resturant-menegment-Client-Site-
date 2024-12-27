
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import ErrorPage from "../componants/ErrorPage/ErrorPage";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import AddFoods from "../Layouts/AddFoods/AddFoods";
import AllFoods from "../Layouts/AllFoods/AllFoods";
import FoodDetails from "../Layouts/AllFoods/FoodDetails";
import FoodPurchase from "../Layouts/AllFoods/FoodPurchase";
// import Gallery from "../Layouts/Gallery/Gallery";
import GalleryPhoto from "../Layouts/Gallery/Gallery";
import MyFoods from "../Layouts/MyFoods/MyFoods";
import UpdateFood from "../Layouts/MyFoods/UpdateFood";
import MyOrders from "../Layouts/MyOrders/MyOrders";
import PrivetRouter from "./PrivetRouter";
import HomeFoods from "../Layouts/Home/HomeFood/HomeFoods";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/", 
            element: <Home></Home>,

        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/addFoods",
            element: <PrivetRouter><AddFoods></AddFoods></PrivetRouter>
        },
        {
          path: "/allFoods",
          element: <AllFoods></AllFoods>
        },
        {
          path: "/foodDetails/:id",
          element: <PrivetRouter><FoodDetails></FoodDetails></PrivetRouter>,
          loader: ({params})=> fetch(`https://restaurant-management-server-site.vercel.app/foods/${params.id}`)

        },
        {
          path: "/foodPurchase/:id",
          element: <FoodPurchase></FoodPurchase>,
          loader: async({params})=> await fetch(`https://restaurant-management-server-site.vercel.app/foods/${params.id}`)
        },
        {
          path: "/gallery",
          element: <GalleryPhoto></GalleryPhoto>,
          loader: ()=> fetch(`https://restaurant-management-server-site.vercel.app/foods`)
        },
        {
          path:"/myFoods/:email",
          element: <PrivetRouter><MyFoods></MyFoods></PrivetRouter>,
          loader: ({params})=> fetch(`https://restaurant-management-server-site.vercel.app/foods?email=${params.email}`)
        },
        {
          path:"/updateFood/:id",
          element: <UpdateFood></UpdateFood>,
          loader: ({params})=> fetch(`https://restaurant-management-server-site.vercel.app/foods/${params.id}`)
        },
        {
          path:"/orders/:email",
          element: <PrivetRouter><MyOrders></MyOrders></PrivetRouter>,
          loader: async({params})=> await fetch(`https://restaurant-management-server-site.vercel.app/purchaseFood?email=${params.email}`)
        },
       
      ]
    },
  ]);


