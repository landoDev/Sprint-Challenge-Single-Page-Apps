import React from "react";
import {Route, Link, Switch} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage"

const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #44281d;
  border-top: 2px solid #e4a788;
  border-bottom: 2px solid #e4a788;
  width: 100%;
  a{
    color: #e89ac7;
    text-decoration: none;
    text-shadow: 0 0 3px #44281d, 0 0 6px #f0e14a;
    padding: 1% 0;
  }
`;


export default function App() {
  return (

    <main>
      <Header />
      <NavBar>
        <Link to='/'>Rick Page</Link>
        <Link to='/character-list'>Rick and Lesser Beings</Link>
      </NavBar>
      <Switch>
        <Route path="/character-list" component={CharacterList} />
        <Route path="/" component={WelcomePage} />
      </Switch>
 
      {/* <WelcomePage/>
      <CharacterList /> */}
    </main>
  );
}
