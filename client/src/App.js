import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import PostsList from "./components/PostsList";

const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-size: 62.5%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Div>
          <h1>YO</h1>
          <PostsList />
        </Div>
      </>
    );
  }
}

export default App;
