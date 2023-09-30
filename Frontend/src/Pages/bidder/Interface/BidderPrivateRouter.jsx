import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const BidderPrivateRouter = () => {
  const bidderAccount = useSelector((state) => state?.bidderData?.bidderInfo);

  if (bidderAccount) {
  }
  return bidderAccount ? <Outlet /> : <Navigate to={"/"} />;
};

export default BidderPrivateRouter;
