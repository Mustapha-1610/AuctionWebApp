import { createSlice } from "@reduxjs/toolkit";
import LandingPageNavbar from "../components/LandingPageNavbar";

const CurrentNavbar = {
  CurrentNavbar: localStorage.getItem("CurrentNavbar")
    ? localStorage.getItem("CurrentNavbar")
    : "LandingPageNavbar",
};

const NavbarSlice = createSlice({
  name: "NavbarState",
  initialState: CurrentNavbar,
  reducers: {
    setCurrentNavbar: (state, action) => {
      state.CurrentNavbar = action.payload;
      localStorage.setItem("CurrentNavbar", action.payload);
    },
    SetDefaultNavbar: (state, action) => {
      state.CurrentNavbar = "LandingPageNavbar";
    },
  },
});

export const { setCurrentNavbar, SetDefaultNavbar } = NavbarSlice.actions;

export const NavbarReducer = NavbarSlice.reducer;
