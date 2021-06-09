// import './index.css'
import React, { PureComponent } from "react";
import fetch from "isomorphic-fetch";
import { withRouter } from "react-router-dom";
import Button from "../../components/button";
import SEO from "../../components/seo";

class User extends PureComponent {
  constructor(props) {
    super(props);

    let initialData;
    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }

    this.state = { users: initialData };
  }

  componentDidMount() {
    if (!this.state.users) {
      User.requestInitialData().then((res) => this.setState({ users: res }));
    }
  }

  render() {
    return (
      <>
        <SEO title={"User"} description={"show about all users"}/>

        <h1>Users</h1>
        <Button click={this.props.history.goBack} text={"redirect back"} />
        {this.state.users?.map(({ id, name, email, address: { street }, phone }) => {
          return <React.Fragment key={id}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{street}</p>
            <p>{phone}</p>
            <hr />
          </React.Fragment>
        })}
      </>
    );
  }

  static async requestInitialData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
  }
}


export default withRouter(User)