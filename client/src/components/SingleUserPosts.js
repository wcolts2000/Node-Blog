import React, { Component } from "react";
import styled from "styled-components";
// import axios from "axios";
import { withRouter } from "react-router-dom";

const Div = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1.2rem;
`;
class SingleUserPosts extends Component {
  render() {
    return <Div>USER POST</Div>;
  }
}

export default withRouter(SingleUserPosts);
