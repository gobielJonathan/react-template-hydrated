import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { matchPath, StaticRouter } from "react-router";
import App from "../src/App";
import routes from "../src/routes";

const PORT = 8080;

const app = express();

app.use("*", (req, res, next) => {
    const dataRequirements = routes
        .filter(route => matchPath(req.url, route)) // filter matching paths
        .map(route => route.component) // map to components
    // .filter( comp => comp.serverFetch ) // check if components have data requirement

    fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Some error happened");
        }

        let context = {}
        let markup = ReactDOMServer.renderToString(
            <StaticRouter context={context} location={req.url}>
                <App />
            </StaticRouter>
        )
        return res.writeHead(200, { "Content-Type": "text/html" }).end(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${markup}</div>`
            )
        );
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});