import React from 'react';
import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/index';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #555;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid #e1e1e1;
  width: 100%;
  background: white;
  border-radius: 2px;
  height: 2.5rem;
  &:focus {
    color: $oc-teal-7;
    border: 1px solid #ffa600;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #7c7c7c;
    text-decoration: underline;
    &:hover {
      color: #3c3c3c;
    }
  }
`;
const StyledButton = styled.button`
  width: 100%;
  height: 2.7rem;
  border: none;
  background: #f97000;
  color: white;
  font-size: 1.2rem;
  font-weight: 900;
  margin-top: 1rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #ff9137;
  }
`;
const textMap = {
  login: '로그인',
  register: '회원가입',
};
const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-paddword"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        <StyledButton>{text}</StyledButton>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
