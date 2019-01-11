import React, { Component } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #f0f0f0;
  border-radius: 1.2rem;
  justify-content: space-around;
  padding: 2rem;
`;

const URL = "http://localhost:5000/";

export default class PostsList extends Component {
  state = {
    users: []
  };

  componentDidMount = () => {
    axios
      .get(`${URL}users`)
      .then(({ data }) => this.setState({ users: data }))
      .catch(err => console.log(err));
  };

  render() {
    const { users } = this.state;
    if (this.state.users.length) {
      return (
        <Div>
          {users.map(user => {
            return <UserCard key={user.id} user={user} />;
          })}
        </Div>
      );
    }
    return <h2>Loading</h2>;
  }
}
