import React from "react";

import Article from "./home_main";
import "../../src/main.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      articles: []
    };
  }
  // componentDidMount() {
  //   fetch("https://conduit.productionready.io/api/tags")
  //     .then(res => res.json())
  //     .then(({ tags }) => this.setState({ tags }));
  //   fetch("https://conduit.productionready.io/api/articles")
  //     .then(res => res.json())
  //     .then(({ articles }) => this.setState({ articles }));
  // }
  render() {
    return (
      <div>
        <div className="home-page">
          <h1>YOU are logged in</h1>
        </div>
      </div>
    );
  }
}

export default Home;
