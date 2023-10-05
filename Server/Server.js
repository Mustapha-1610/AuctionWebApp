import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "../Server/DB/dbConfig.js";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import bidderRouter from "./Bidder/router.js";
import sellerRouter from "./Seller/router.js";
import auctionListingRouter from "./AuctionListing/router.js";
import auctionRoomRouter from "./AuctionRoom/router.js";
import bidderNamespaceLogic from "./Bidder/socket.js";

dotenv.config();

const port = process.env.Port;
connectDB();

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://25t95h0z-3000.euw.devtunnels.ms",
      "https://auction-web-app-y7ra.vercel.app/",
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
const server = http.createServer(app, (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:3000",
    "https://25t95h0z-3000.euw.devtunnels.ms",
    "http://localhost:5000/socket.io/?EIO=4&transport=polling&t=OgFzrS"
  );
});
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://25t95h0z-3000.euw.devtunnels.ms",
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
  },
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/bidder", bidderRouter);
app.use("/api/auctionlisting", auctionListingRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/auctionroom", auctionRoomRouter);

const bidderNameSpace = io.of("/bidder");

bidderNamespaceLogic(bidderNameSpace);

server.listen(port, () => console.log("Server started"));
