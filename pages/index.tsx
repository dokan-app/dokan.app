import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
// import Card from "../components/Card";
// import Input from "../components/Input";
// import Button from "../components/Button";

const Wrapper = styled.div`
  width: 800px;
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
`;

const index = () => {
  return (
    <Wrapper>
      <h1>Dokan</h1>
      <h3>Complete ecommerce solution</h3>
      <div tw="mt-4">
        <p>
          Dokan is an e-commerce platform that allows anyone to set up an online
          store and sell their products. Merchants can also sell their products
          in person with Dokan POS.
        </p>
        <p>
          The main objective of this project is to provide the complete solution
          for an e-commerce business. When someone needs to set up an online
          store for their company or just want to sell individual items like
          honey, jewelry, cosmetics etc, all they will need is to just open an
          account on the Dokan platform, put the product information, choose a
          predefined design then start selling.
        </p>
      </div>
    </Wrapper>
  );
};

export default index;
