import express from "express";
import { Welcome } from "./helpers/welcome";

const app = express();
const port = 8000;

app.get("/", Welcome(req, res));

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})