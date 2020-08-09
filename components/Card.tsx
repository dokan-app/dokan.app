import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const CardStyle = styled.div`
  ${tw`w-64 p-4`}
  ${tw`bg-white shadow rounded-md`}
`;

const Card = ({ children }) => {
  return <CardStyle>{children}</CardStyle>;
};

export default Card;
