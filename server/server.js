import express from "express";
import path from "path";
import ssr from './ssr'

const PORT = 8080;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.use('/', ssr)

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});

