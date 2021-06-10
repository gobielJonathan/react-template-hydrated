import fetch from "isomorphic-fetch";
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import SEO from "../../components/seo";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    let initialData;
    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }

    this.state = { posts: initialData };
  }

  componentDidMount() {
    if (!this.state.posts) {
      Home.requestInitialData().then((res) => this.setState({ posts: res }));
    }
  }

  render() {
    return (
      <>
        <SEO title={"Home"} description={"show about all post"} />

        <h1>testing</h1>
        <Link to={"/users"}>
          <Button text={"redirect to users"} />
        </Link>
        {
          this.state.posts?.map(({ id, title }) => {
            return <p key={id}>{title}</p>;
          })
        }
      </>
    );
  }

  static async requestInitialData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  }
}
