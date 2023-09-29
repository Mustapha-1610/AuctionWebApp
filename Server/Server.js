import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.Port;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("server is ready"));

app.listen(port, () => console.log("server started"));
