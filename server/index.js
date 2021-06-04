const express = require('express')
const React = require('react')
const ReactDOM = require('react-dom/server')
const App = require('../src/App')
const path = require('path')
const fs = require("fs")

const app = express()
app.get("*", (req, res) => {
    res.status(200).send()
})
app.listen(3000, () => {
    console.log('listen :3000')
})