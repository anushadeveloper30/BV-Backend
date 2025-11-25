import express from "express";
import { Welcome } from "./helpers/welcome.js";

const app = express();
const port = 8000;

app.get("/", Welcome);

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})