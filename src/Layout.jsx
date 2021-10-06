import React from "react";
import Blogs from "./Blogs";
import Products from "./Products";
import ImgCarousel from "./ImgCarousel";

const Layout = () => {
  return (
    <div>
      <ImgCarousel />
      <Products />
      <Blogs />
    </div>
  );
};

export default Layout;
