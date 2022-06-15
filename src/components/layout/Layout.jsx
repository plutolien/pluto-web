import React from "react";

// component start
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// component end



export default function layout({children})  {
  return (
    <>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}
