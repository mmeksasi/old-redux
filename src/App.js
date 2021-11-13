import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost, getPosts } from "./redux/actions/PostsAction";
class App extends Component {
  render() {
    const { postsState } = this.props;
    return (
      <div>
        <button onClick={() => this.props.getPosts()}>Press Me</button>
        {postsState.isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {postsState.posts.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => {
    const { postsState, authState } = state;
    return { postsState, authState };
  },
  { addPost, getPosts }
)(App);
