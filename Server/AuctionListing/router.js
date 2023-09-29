import expreess from "express";
import * as auctionListingController from "./controller.js";
import { protectSellerRoutes } from "../Seller/tokenHandler.js";
import { protectBidderRoutes } from "../Bidder/tokenHandler.js";
const auctionListingRouter = expreess.Router();

auctionListingRouter
  .route("/create")
  .post(protectSellerRoutes, auctionListingController.CreateAuctionListing);
auctionListingRouter
  .route("/getLatestAuctions")
  .get(auctionListingController.getLatestAuctions);

auctionListingRouter
  .route("/getAuction")
  .post(protectBidderRoutes, auctionListingController.getAuction);
auctionListingRouter.get(
  "/getOngoingAuctions",
  auctionListingController.getAllOngoingAuction
);

auctionListingRouter.get(
  "/getCompletedAuctions",
  auctionListingController.getAllEndedAuctions
);

auctionListingRouter
  .route("/endAuction")
  .post(protectBidderRoutes, auctionListingController.EndAuction);
export default auctionListingRouter;
