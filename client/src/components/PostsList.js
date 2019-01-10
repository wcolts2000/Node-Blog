import React, { Component } from "react";
import PostCard from "./PostCard";
import axios from "axios";

const URL = "http://localhost:5000/";

export default class PostsList extends Component {
  state = {
    posts: []
  };

  componentDidMount = () => {
    axios
      .get(`${URL}posts`)
      .then(({ data }) => this.setState({ posts: data }))
      .catch(err => console.log(err));
  };

  render() {
    const { posts } = this.state;
    console.log(posts);
    if (this.state.posts.length) {
      return (
        <div>
          {posts.map(post => {
            console.log("POST", post);

            return <PostCard key={post.id} post={post} />;
          })}
        </div>
      );
    }
    return <h2>Loading</h2>;
  }
}
