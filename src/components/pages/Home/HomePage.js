import React from "react";
import Home from "./Home";
import HomeHeader from "./homeHeader";


const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <Home />
    </React.Fragment>
  );
};

export default HomePage;
