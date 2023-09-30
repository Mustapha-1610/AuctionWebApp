import SellerNavbar from "./Pages/seller/Components/sellerNavbar";
import BidderNavbar from "./Pages/bidder/Components/BidderNavbar";
import AdminNavbar from "./Pages/admin/Components/AdminNavbar";
import LandingPageNavbar from "./LandingPages/components/LandingPageNavbar";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
const Navbar = () => {
  const NavbarState = useSelector((state) => state?.NavbarState.CurrentNavbar);
  const [navComponent, setNavComponent] = useState(<LandingPageNavbar />);
  useEffect(() => {
    NavbarState === "LandingPageNavbar"
      ? setNavComponent(<LandingPageNavbar />)
      : NavbarState === "BidderNavbar"
      ? setNavComponent(<BidderNavbar />)
      : NavbarState === "SellerNavbar"
      ? setNavComponent(<SellerNavbar />)
      : setNavComponent(<AdminNavbar />);
  }, [NavbarState]);
  return <>{navComponent}</>;
};
export default Navbar;
