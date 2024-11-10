import React from "react";
import Navbar from "./components/molecules/Navbar/Navbar.jsx";
import ThumbnailImages from "./components/molecules/ThumbnailImages/ThumbnalImages.jsx";
import MainImage from "./components/atoms/MainImage/MainImage.jsx";
import SneakerCompany from "./components/atoms/SneakerCompany/SneakerCompany.jsx";
import ProductTitle from "./components/atoms/ProductTitle/ProductTitle.jsx";
import ProductDescription from "./components/atoms/ProductDescription/ProductDescription.jsx";
import Pricing from "./components/molecules/Pricing/Pricing.jsx";
import QuantitySelector from "./components/molecules/QuantitySelector/QuantitySelector.jsx";


const App = () => {
  return (
    <div style={{ width: "1110px", margin: "0 auto" }}>
      <Navbar />

      <hr style={{ width: "1110px", height: "1px", backgroundColor: "#E4E9F2", marginBottom: "45px" }} />

      <div style={{ width: "1000px",display: "flex", gap: "50px", marginBottom: "90px" }}>
        <div style={{ flex: "1 1 60%", }}>
          <MainImage />
          <ThumbnailImages />
        </div>
        <div style={{ flex: "1 1 30%", }}>
          <SneakerCompany />
          <ProductTitle />
          <ProductDescription />
          <Pricing />
          <QuantitySelector />
        </div>
      </div>
    </div>
  );
};

export default App;

