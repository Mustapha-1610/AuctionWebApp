import SellerNavbar from "./Pages/seller/Components/SellerNavbar";
import BidderNavbar from "./Pages/bidder/Components/BidderNavbar";
import AdminNavbar from "./Pages/admin/Components/AdminNavbar";
import LandingPageNavbar from "./LandingPages/components/LandingPageNavbar";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
const Navbar = () => {
  const bidder = useSelector((state) => state?.bidderData.bidderInfo);
  const seller = useSelector((state) => state?.sellerData.sellerInfo);
  const admin = useSelector((state) => state?.adminData.adminInfo);
  const [navComponent, setNavComponent] = useState(<LandingPageNavbar />);
  useEffect(() => {
    !bidder && !seller && !admin
      ? setNavComponent(<LandingPageNavbar />)
      : bidder
      ? setNavComponent(<BidderNavbar />)
      : seller
      ? setNavComponent(<SellerNavbar />)
      : setNavComponent(<AdminNavbar />);
  }, [bidder, seller, admin]);
  return <>{navComponent}</>;
};
export default Navbar;
