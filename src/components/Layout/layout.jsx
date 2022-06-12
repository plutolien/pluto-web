import React, { Children } from "react";

// component start
import Footer from "../Header/header";
import Header from "../Footer/footer";
// component end

const layout = ({ children }) => {
  return (
    <>
    <Footer/>
      {children}
    <Header/>
    </>
  );
};

export default layout;
