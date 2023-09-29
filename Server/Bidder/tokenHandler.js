import jwt from "jsonwebtoken";
import bidder from "./modal.js";
import asyncHandler from "express-async-handler";

const protectBidderRoutes = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.bidder = await bidder.findById(decoded.bidderId);
    next();
  } catch (error) {
    return res.status(401).json({ Error: "Invalid Token" });
  }
});
export { protectBidderRoutes };
