import React from 'react'
import Navbar from '../Nav-bar/Navbar'
import Footer from '../Footer/Footer'
import {useNavigate, Outlet } from 'react-router-dom';

export default function Layout({loginData,setLoginData}) {
  let navigate=useNavigate()

  function Logout() {
    localStorage.removeItem("token")
    setLoginData(null)
    navigate("/login")
  }
  return <>
  <Navbar loginData={loginData} Logout={Logout}/>
  <Outlet/>
  <Footer/>
  
  </>
}
