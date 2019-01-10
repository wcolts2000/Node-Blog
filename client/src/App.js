import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import PostsList from "./components/PostsList";
import UsersList from "./components/UsersList";
import SinglePost from "./components/SingleUserPosts";
import SingleUser from "./components/SingleUser";
import HomePage from "./components/HomePage";

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
    background-color: #040404;
    color: white;
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

const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bolder;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Div>
          <H1>The One Ring Blog</H1>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={UsersList} />
          <Route path="/users/:id" component={SingleUser} />
          <Route path="/posts" component={PostsList} />
          <Route path="/posts/:id" component={SinglePost} />
        </Div>
      </>
    );
  }
}

export default App;
