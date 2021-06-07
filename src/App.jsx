import React from 'react'
import { Route, Switch } from "react-router-dom";
import Provider from "./context/index.context";
import { QueryClient, QueryClientProvider } from "react-query";
import routes from "./routes";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default () => {
  return (
    <QueryClientProvider client={client}>
      <Provider>
        <Switch>
          {
            routes.map(route => <Route key={route.path} {...route} />)
          }
        </Switch>
      </Provider>
    </QueryClientProvider>
  );
};
