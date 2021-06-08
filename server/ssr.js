import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import serialize from 'serialize-javascript'
import { matchPath, StaticRouter } from "react-router";
import App from "../src/App";
import path from 'path'
import fs from "fs";
import routes from "../src/routes";

const router = express.Router()

router.get("*", async (req, res, next) => {
    const currentRoute = routes.find(route => matchPath(req.url, route))
    const requestInitialData = currentRoute?.component?.requestInitialData?.()
    console.log(currentRoute.component)
    try {
        const initialData = await Promise.resolve(requestInitialData)
        let context = { initialData: initialData ?? null }

        const data = await readFile("./dist/index.html")

        let markup = ReactDOMServer.renderToString(
            <StaticRouter context={context} location={req.url}>
                <App />
            </StaticRouter>
        )
        res.write(`<script>window.__initialData__=${serialize(initialData)}</script>`)
        res.write(
            data.replace(
                '<div id="app"></div>',
                `<div id="app">${markup}</div>`
            )
        )
        res.end()
    } catch (error) {
        res.status(500).end("something happend " + error)
    }
});



export default router

function readFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(filepath), "utf-8", (err, data) => {
            if (err) {
                return reject(err)
            }
            return resolve(data)
        });
    })
}
