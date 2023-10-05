import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Ongoing from "./LandingPages/pages/Ongoing.jsx";
import BidderLogin from "./LandingPages/pages/BidderLogin.jsx";
import BidderSignup from "./LandingPages/pages/BidderSignup.jsx";
import store from "./Store/store.js";
import { Provider } from "react-redux";
import LandingPrivateRouter from "./LandingPages/Interface/LandingPrivateRouter.jsx";
import BidderInterface from "./Pages/bidder/Interface/BidderInterface.jsx";
import AuctionListingParticipation from "./Pages/bidder/Pages/AuctionPages/AuctionListingParticipation.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPrivateRouter />}>
          <Route path="/" index element={<App />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/Blogin" element={<BidderLogin />} />
          <Route path="/Bsignup" element={<BidderSignup />} />
          <Route
            path="/auction/:auctionId"
            element={<AuctionListingParticipation />}
          />
        </Route>
        <Route path="/bidder/*" element={<BidderInterface />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
