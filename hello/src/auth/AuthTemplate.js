import React from 'react';
import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #3b3c4a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2.5rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.125rem;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  background: #ffe4a1;
  border-radius: 2px;
`;
const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">SATOYPRO</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
