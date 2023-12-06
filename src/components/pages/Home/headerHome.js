import React from "react";
import Home from "./Home";
import HomeHeader from "./homeHeader";


const HeaderHome = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <Home />
    </React.Fragment>
  );
};

export default HeaderHome;
