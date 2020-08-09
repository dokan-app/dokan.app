import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const InputStyle = styled.input`
  ${tw`my-3 px-3 py-2`}
  ${tw`border-0 w-full rounded outline-none bg-gray-200 focus:bg-gray-100 transition-colors duration-200`}
`;

const Input = () => {
  return <InputStyle type="text" placeholder="Username" />;
};

export default Input;
