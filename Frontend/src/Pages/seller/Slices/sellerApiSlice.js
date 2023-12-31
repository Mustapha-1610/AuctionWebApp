import { apiSlice } from "../../../Store/apiSlice";

const Seller_URL = "/api/seller";

export const sellerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sellerlogin: builder.mutation({
      query: (data) => ({
        url: `${Seller_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    sellerCreateAuctionListing: builder.mutation({
      query: (data) => ({
        url: `${AuctionListing_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    sellersignup: builder.mutation({
      query: (data) => ({
        url: `${Seller_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    editSeller: builder.mutation({
      query: (data) => ({
        url: `${Seller_URL}/edit`,
        method: "POST",
        body: data,
      }),
    }),
    getauctionlistings: builder.mutation({
      query: (data) => ({
        url: `${Seller_URL}/getAuctions`,
        method: "POST",
        body: data,
      }),
    }),
    getCompletedAuctionListings: builder.mutation({
      query: (data) => ({
        url: `${Seller_URL}/getCompletedAuctions`,
        method: "POST",
        body: data,
      }),
    }),
    getUpdatedProfile: builder.query({
      query: () => ({
        url: `${Seller_URL}/getUpdatedPorfile`,
        method: "GET",
      }),
    }),
    getSellerWithId: builder.mutation({
      query: (data) => ({
        url: `${Seller_URL}/getSellerWithId`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useSellerloginMutation,
  useSellerCreateAuctionListingMutation,
  useSellersignupMutation,
  useGetauctionlistingsMutation,
  useGetCompletedAuctionListingsMutation,
  useGetUpdatedProfileQuery,
  useEditSellerMutation,
  useGetSellerWithIdMutation,
} = sellerApiSlice;
