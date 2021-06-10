import gql from "graphql-tag";
import React, { PureComponent } from "react";
import { client } from "../../api/graphql";

export default class Currency extends PureComponent {
    constructor(props) {
        super(props)

        let initialData;
        if (props.staticContext) {
            initialData = props.staticContext.initialData;
        } else {
            initialData = window.__initialData__;
            delete window.__initialData__;
        }

        this.state = { currency: initialData };
    }

    componentDidMount() {
        Currency.requestInitialData().then(res => this.setState({ currency: res }))
    }
    render() {
        return <>
            <h1>currency</h1>
            {
                this.state.currency?.map(({ currency, rate, name }, idx) => {
                    return <React.Fragment>
                        {currency}
                        {rate}
                        {name}
                        <hr />
                    </React.Fragment>
                })
            }
        </>
    }
    static async requestInitialData() {
        return client.query({
            query: gql`
            query GetRates {
                rates(currency: "USD") {
                  currency
                }
              }
            `
        })
    }
}