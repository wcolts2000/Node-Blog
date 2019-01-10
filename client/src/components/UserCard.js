import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Div = styled.div`
  width: 10rem;
  height: 5rem;
  padding: 0.5rem;
  background: #f0f0f0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  background: #0a0a0a;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`;

function UserCard({ user: { id, name }, history }) {
  return (
    <Div onClick={() => history.push(`/users/${id}`)}>
      <Button>{name}</Button>
    </Div>
  );
}

export default withRouter(UserCard);
