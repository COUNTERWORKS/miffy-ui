import * as React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AestheticsPage from 'pages/AestheticsPage';
import AlertPage from 'pages/AlertPage';
import TitlePage from 'pages/TitlePage';
import GridPage from 'pages/GridPage';
import { BadgePage } from 'pages/BadgePage';
import { ButtonPage } from 'pages/ButtonPage';
import styled from 'styled-components';

const App: React.FC<{}> = () => (
  <Container>
    <MainMenu>
      <Title>
        <a href="">Miffy</a>
        <span>Ver 0.1.0</span>
      </Title>
      <Nav>
        <Li>
          <NavTitle>Overview</NavTitle>
        </Li>
        <Li>
          <StyledLink to="/">
            <Icon className="fa fa-beer" />
            Aesthetics
          </StyledLink>
        </Li>
        <Li>
          <NavTitle>Design</NavTitle>
        </Li>
        <Li>
          <NavTitle>Layout</NavTitle>
        </Li>
        <Li>
          <NavTitle>Components</NavTitle>
        </Li>
        <Li>
          <StyledLink to="/alerts">
            <Icon className="fa fa-beer" />
            Alerts
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/badges">
            <Icon className="fa fa-beer" />
            Badges
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/button">
            <Icon className="fa fa-beer" />
            Buttons
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/title">
            <Icon className="fa fa-beer" />
            Title
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/grid">
            <Icon className="fa fa-beer" />
            Grid
          </StyledLink>
        </Li>
      </Nav>
    </MainMenu>
    <Content>
      <Switch>
        <Route exact path="/" component={AestheticsPage} />
        <Route exact path="/alerts" component={AlertPage} />
        <Route exact path="/badges" component={BadgePage} />
        <Route exact path="/title" component={TitlePage} />
        <Route exact path="/grid" component={GridPage} />
        <Route exact path="/button" component={ButtonPage} />
      </Switch>
    </Content>
  </Container>
);

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Icon = styled.i`
  width: 18px;
  text-align: center;
  margin-right: 13px;
`;

const MainMenu = styled.div`
  float: left;
  width: 320px;
  height: 100vh;
  z-index: 1000;
  transition: all 0.2s ease-in-out;
`;

const Nav = styled.nav`
  margin: 0;
  padding: ${({ theme }): string => `${theme.size.space(4)}px`};
  list-style: none;
`;

const Li = styled.li`
  margin-bottom: 6px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 14px;
  padding: 8px 16px;
  color: #888;
  text-decoration: none;
  border-radius: 3px;
  :hover {
    background: #ff4a1a;
    color: #fff;
  }
`;

const NavTitle = styled.span`
  font-size: 2rem;
  display: block;
  padding: ${({ theme }): string => `${theme.size.space(2)}px ${theme.size.space(4)}px`};
  margin-top: ${({ theme }): string => `${theme.size.space(4)}px`};
  font-weight: ${({ theme }): number => theme.weight.bold};
`;

const Title = styled.h1`
  background: ${({ theme }): string => theme.palette.colorCode.white};
  margin: 0;
  padding: ${({ theme }): string => `${theme.size.space(8)}px ${theme.size.space(8)}px`};
  a {
    display: block;
    font-size: 2rem;
    margin: 0;
    color: ${({ theme }): string => theme.palette.colorCode.text};
    background-size: contain;
    transition: all ease 0.5s;
    text-decoration: none;
    outline: none;
    margin: 0;
    font-weight: ${({ theme }): number => theme.weight.bold};
  }
  span {
    font-size: 1rem;
    display: block;
    font-weight: ${({ theme }): number => theme.weight.bold};
  }
`;

const Content = styled.div`
  height: inherit;
  margin: 0;
  padding: ${({ theme }): string => `${theme.size.space(8)}px ${theme.size.space(16)}px`};
  overflow-y: auto;
  overflow-x: scroll;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  border-left: ${({ theme }): string => `solid 1px ${theme.palette.colorCode.border}`};
  min-height: 100vh;
`;

export default App;
