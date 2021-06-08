import './index.css'
import { PureComponent } from "react";
import fetch from "isomorphic-fetch"

export default class Todo extends PureComponent {
    constructor(props) {
        super(props)

        let initialData = []
        if (props.staticContext) {
            initialData = props.staticContext.initialData
        } else {
            initialData = window.__initialData__
            delete window.__initialData__
        }

        this.state = { todos: initialData }
    }

    render() {
        return <>
            <h2>welcome to todos</h2>
            {
                this.state.todos?.map(({ title, id }) => {
                    return <p key={id}>{title}</p>
                })
            }
        </>
    }

    static async requestInitialData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        return await res.json()
    }

}