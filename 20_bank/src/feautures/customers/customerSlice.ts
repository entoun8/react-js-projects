import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  fullName: string;
  nationalId: string;
  createdAt: string;
}

const initialState: CustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

interface CreateCustomerPayload {
  fullName: string;
  nationalId: string;
  createdAt: string;
}

const customerSlice = createSlice({
  initialState: initialState,
  name: "customer",
  reducers: {
    createCustomer: {
      prepare(fullName: string, nationalId: string) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action: PayloadAction<CreateCustomerPayload>) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
});

export const { createCustomer } = customerSlice.actions;
export default customerSlice.reducer;
