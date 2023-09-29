import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "../Server/DB/dbConfig.js";
import cors from "cors";
import bidderRouter from "./Bidder/router.js";
dotenv.config();
const port = process.env.Port;

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://25t95h0z-3000.euw.devtunnels.ms",
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use("/bidder", bidderRouter);

app.get("/", (req, res) => res.send("server is ready"));

app.listen(port, () => console.log("server started"));
