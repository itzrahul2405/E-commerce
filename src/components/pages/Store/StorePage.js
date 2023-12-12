import React from "react";
import Product from "./Product/Product";
import Header from "../../Header";

const StorePage = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Product onShow={props.onShow} />
    </React.Fragment>
  );
};

export default StorePage;
