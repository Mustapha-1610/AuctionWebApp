import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetLatestAuctionsQuery } from "../../Slices/bidderApiSlice";
import LatestAuctionListing from "../../Components/LatestAuctionListing";
const HomePage = () => {
  const { data, isLoading, isError } = useGetLatestAuctionsQuery();
  const [latestAuctions, setLastestAuctions] = useState(null);
  useEffect(() => {
    if (data) {
      setLastestAuctions(data);
    }
  }, [data]);
  return (
    <>
      {latestAuctions ? (
        <>
          <h2>Latest Auctions</h2>
          {latestAuctions?.map((auction, index) => {
            return (
              <React.Fragment key={index}>
                <LatestAuctionListing auction={auction} />;
              </React.Fragment>
            );
          })}
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default HomePage;
