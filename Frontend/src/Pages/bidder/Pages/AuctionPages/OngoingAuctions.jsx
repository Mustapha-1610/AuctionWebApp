import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllOnoingAuctionsQuery } from "../../Slices/bidderApiSlice";
import LatestAuctionListing from "../../Components/LatestAuctionListing";
const OngoingAuctions = () => {
  const { data, isLoading, isError } = useGetAllOnoingAuctionsQuery();
  const [auctions, setAuctions] = useState([]);
  const navigate = useNavigate();
  const bidder = useSelector((state) => state?.bidderData?.bidderInfo);
  const [errMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    if (data?.Message) {
      setErrorMessage(data?.Message);
    }
    if (data && !isLoading && !isError) {
      setAuctions(data?.AllAuctionListing);
    }
  }, [data]);
  return (
    <>
      {errMessage ? (
        <h1>{errMessage}</h1>
      ) : (
        <>
          {auctions?.map((item, index) => {
            return <LatestAuctionListing key={index} auction={item} />;
          })}
        </>
      )}
    </>
  );
};

export default OngoingAuctions;
