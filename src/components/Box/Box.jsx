import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ms};
  margin-right: ${(props) => props.me};
  width: ${(props) => props.w};
`;

const Box = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
