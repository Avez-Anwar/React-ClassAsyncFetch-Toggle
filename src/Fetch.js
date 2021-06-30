import React from 'react';
import axios from 'axios';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      toggle: true
    };
  }

  handleClick = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(response.data);
    this.setState({ post: response.data });
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  render() {
    const newPost = this.state.post.map(posts => {
      return (
        <div key={posts.id}>
          <p>Id: {posts.id}</p>
          <p>Title: {posts.title}</p>
          <p>Body: {posts.body}</p>
        </div>
      );
    });

    return (
      <div>
        <button onClick={this.handleClick}>fetch posts</button>
        {this.state.toggle ? newPost : null}
      </div>
    );
  }
}

export default Fetch;
