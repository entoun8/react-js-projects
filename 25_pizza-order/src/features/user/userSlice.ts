import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";
import type { UserState, Position, GeocodingResult } from "../../types";

function getPosition(): Promise<Position> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async (): Promise<{ position: { latitude: number; longitude: number }; address: string }> => {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    const addressObj: GeocodingResult = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.countryName}`;

    return { position, address };
  }
);

const initialState: UserState = {
  username: "",
  status: "idle",
  address: "",
  position: null,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    clearUser(state) {
      state.username = "";
    },
    clearAllData(state) {
      state.username = "";
      state.address = "";
      state.position = null;
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Failed to fetch address";
      });
  },
});

export const { updateUsername, clearUser, clearAllData } = userSlice.actions;
export default userSlice.reducer;
