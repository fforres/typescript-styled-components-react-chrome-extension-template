import React from "react";
import styled from "styled-components";

const Div = styled.div({
  height: 100,
  width: 100,
  backgroundColor: "orange",
});

const Test: React.FC = () => {
  return <Div>TEST</Div>;
};

export default Test;
