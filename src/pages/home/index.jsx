import fetch from "isomorphic-fetch"
import { PureComponent } from "react"
import { Link } from "react-router-dom"

export default class Home extends PureComponent {
  constructor(props) {
    super(props)

    let initialData = []
    if (props.staticContext) {
      initialData = props.staticContext.initialData
    } else {
      initialData = window.__initialData__
      delete window.__initialData__
    }

    this.state = { posts: initialData }
  }

  render() {
    return (
      <>
        <h1>testing</h1>
        <Link to={'/todo'}>Login</Link>
        {
          this.state.posts?.map(({ id, title }) => {
            return <p key={id}>{title}</p>
          })
        }
      </>
    )
  }

  static async requestInitialData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await res.json()
  }
}