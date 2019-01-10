import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";

const URL = "http://localhost:5000/";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1.2rem;
`;

class SingleUser extends Component {
  state = { usersPosts: [] };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios
      .get(`${URL}users/${id}/posts`)
      .then(({ data }) => this.setState({ usersPosts: data }))
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.usersPosts.length) {
      return <h2>Loading User...</h2>;
    }
    return (
      <Div>
        {this.state.usersPosts.map((post, i) => (
          <div key={i}>
            <p>{post.text}</p>
          </div>
        ))}
      </Div>
    );
  }
}

export default withRouter(SingleUser);
