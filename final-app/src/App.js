import React, { useEffect, useState } from 'react'
import {jwtDecode} from "jwt-decode"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './compotent/Layout/Layout'
import Home from './compotent/Home/Home'
import Movie from './compotent/Movie/Movie'
import Tv from './compotent/Tv/Tv'
import Login from './compotent/Login/Login'
import Logout from './compotent/Logout/Logout'
import Register from './compotent/Register/Register'
import People from './compotent/People/People'
import Details from './compotent/Details/Details'
import DetailesTv from './compotent/Details/DetailesTv'
export default function App() {
  let [loginData,setLoginData]=useState(null)
  function savaLoginData() {
    let encodedToken=localStorage.getItem('token');
    let decodedToken= jwtDecode(encodedToken);
    setLoginData(decodedToken)
    console.log(decodedToken);
  }
  useEffect(()=>{
  if (localStorage.getItem("token")) {
    savaLoginData()
    
  }
},[])

  let routers=createBrowserRouter([
    {path:"",element:<Layout loginData={loginData} setLoginData={setLoginData} />,children:[
      {path:"home",element:<Home/>},
      {path:"movie",element:<Movie/>},
      {path:"tv",element:<Tv/>},
      {path:"people",element:<People/>},
      {path:'details/:id',element:<Details/>},
      {path:'detailstv/:id' , element: <DetailesTv/>},
      {index:true,element:<Login/>},
      {path:"login",element:<Login savaLoginData={savaLoginData}/>},
     {path:"register",element:<Register/>}, 
      {path:"logout",element:<Logout/>},
 
    ]}
  ])
  
  return <>
  
  <RouterProvider router={routers}></RouterProvider>
  
  
  
  
  
  </>
}
