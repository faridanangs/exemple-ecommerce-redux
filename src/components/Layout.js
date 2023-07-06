import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getDataProduct } from "../slice/ProductSlice";

const Layout = () => {
  const [bool, setBool] = useState(false);
  const handleOpen = () => setBool(!bool);
  const dispatch = useDispatch();
  const {cart, favorite} = useSelector((state)=> state.storeProduct)
  useEffect(()=> {
    dispatch(getDataProduct())
  }, [dispatch])

  return (
    <>
      <Header cartCount={cart} favorite={favorite} handleDepan={handleOpen} />
      <Outlet />
      <Footer />
    </>
  );
};



export default Layout;
