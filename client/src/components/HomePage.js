import React from "react";
import styled from "styled-components";
import doors from "../img/doors.jpg";
import { withRouter } from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5rem;
  background-image: url(${doors});
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Button = styled.button`
  text-transform: uppercase;
  padding: 1.2rem 3rem;
  cursor: pointer;
  margin: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

function HomePage({ history }) {
  return (
    <Div>
      <Button onClick={() => history.push("/users")}>Users</Button>
      <Button onClick={() => history.push("/posts")}>Posts</Button>
    </Div>
  );
}

export default withRouter(HomePage);
