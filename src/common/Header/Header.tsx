import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  background: #111;
  color: #fff;
  margin: -32px -64px 32px -64px;
  padding: 32px;
  font-size: 3rem;
`;

export default Header;
