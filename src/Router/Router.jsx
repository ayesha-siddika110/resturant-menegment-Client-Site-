
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


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
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
            element: <AddFoods></AddFoods>
        },
        {
          path: "/allFoods",
          element: <AllFoods></AllFoods>
        },
        {
          path: "/foodDetails/:id",
          element: <FoodDetails></FoodDetails>,
          loader: ({params})=> fetch(`http://localhost:3000/foods/${params.id}`)

        },
        {
          path: "/foodPurchase/:id",
          element: <FoodPurchase></FoodPurchase>,
          loader: async({params})=> await fetch(`http://localhost:3000/foods/${params.id}`)
        },
        {
          path: "/gallery",
          element: <GalleryPhoto></GalleryPhoto>,
          loader: ()=> fetch(`http://localhost:3000/foods`)
        },
        {
          path:"/myFoods/:email",
          element: <MyFoods></MyFoods>,
          loader: ({params})=> fetch(`http://localhost:3000/foods?email=${params.email}`)
        },
        {
          path:"/updateFood/:id",
          element: <UpdateFood></UpdateFood>,
          loader: ({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
        },
        {
          path:"/orders/:email",
          element: <MyOrders></MyOrders>,
          loader: async({params})=> await fetch(`http://localhost:3000/purchaseFood?email=${params.email}`)
        },
      ]
    },
  ]);


