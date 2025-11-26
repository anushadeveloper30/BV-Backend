import express from "express";
import { Welcome } from "./helpers/welcome.js";
import "dotenv/config";
import { connectDB } from "./database/connection.js";

const app = express();
const port = process.env.PORT;

app.get("/", Welcome);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on the port ${port}`)
    })
}).catch((error) => {
    console.error("Server failed to start:", error.message);
    process.exit(1);
});
