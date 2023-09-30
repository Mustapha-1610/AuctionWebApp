import { Routes, Route } from "react-router-dom";
import AuctionListing from "../Pages/AuctionPages/AuctionListing";
import AuctionListingPage from "../Pages/AuctionPages/AuctionListingParticipation";
import CompletedAuctions from "../Pages/AuctionPages/CompletedAuctions";
import HistoryPage from "../Pages/AuctionPages/HistoryPage";
import HomePage from "../Pages/AuctionPages/HomePage";
import OngoingAuctions from "../Pages/AuctionPages/OngoingAuctions";
import EditInfo from "../Pages/BidderPages/EditInfo";
import EditSecurityInfo from "../Pages/BidderPages/EditSecurityInfo";
import HowItWorks from "../Pages/BidderPages/HowItWorks";
import PorfilePage from "../Pages/BidderPages/ProfilePage";
import BidderPrivateRouter from "./BidderPrivateRouter";
function BidderInterface() {
  return (
    <Routes>
      <Route>
        <Route path="" element={<BidderPrivateRouter />}>
          <Route path="/profile" element={<PorfilePage />} />
          <Route path="/history" elemen={<HistoryPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ongoing" element={<OngoingAuctions />} />
          <Route path="/edit" element={<EditInfo />} />
          <Route path="/securitySettings" element={<EditSecurityInfo />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/completed" element={<CompletedAuctions />} />
          <Route path="/listingPage" element={<AuctionListingPage />} />
          <Route path="/auctionListing" element={<AuctionListing />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default BidderInterface;
