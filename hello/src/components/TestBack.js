import React from "react";
import styled from "styled-components";

const TestBackBlock = styled.div`
  width: 100%;
  height: 100vh;
  background: #60a0ff;
  display: flex;
  justify-content: center;
  align-items: center;

  @font-face {
    font-family: "IM_Hyemin-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Bold.woff2")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "IM_Hyemin-Bold";

  h1 {
    color: white;
    font-size: 3.5rem;
  }

  p {
    color: white;
    font-size: 1.78rem;
  }
`;

const TestBack = ({ message }) => {
  return (
    <TestBackBlock>
      <h1>{message.name}</h1>
    </TestBackBlock>
  );
};

export default TestBack;
