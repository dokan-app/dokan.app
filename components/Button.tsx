import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonStyle = styled.button`
  ${tw`px-3 py-2`}
  ${tw`bg-indigo-600 rounded text-white text-sm focus:outline-none uppercase`}
`;

const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
