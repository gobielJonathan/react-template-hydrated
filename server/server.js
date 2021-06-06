import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "../src/App";

const PORT = 8080;

const app = express();

app.use("*", (req, res, next) => {
    fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some error happened");
        }

        let markup = ReactDOMServer.renderToString(
            <StaticRouter>
                <App />
            </StaticRouter>
        )
        return res.send(
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