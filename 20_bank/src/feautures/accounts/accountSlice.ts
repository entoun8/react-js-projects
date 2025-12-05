import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
  currency: string;
  isLoading: boolean;
}

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  currency: "USD",
  isLoading: false,
};

interface DepositParams {
  amount: number;
  currency: string;
}

export const depositeWithConversion = createAsyncThunk(
  "account/depositeWithConversion", 
  async ({ amount, currency }: DepositParams) => {
    if (currency === "USD") {
      return amount;
    }
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    return converted;
  }
);

interface RequestLoanPayload {
  amount: number;
  purpose: string;
}

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    withdraw(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount: number, purpose: string) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action: PayloadAction<RequestLoanPayload>) {
        state.balance += action.payload.amount;
        state.loan += action.payload.amount;
        state.loanPurpose = action.payload.purpose;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(depositeWithConversion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(depositeWithConversion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.balance += action.payload;
      })
      .addCase(depositeWithConversion.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export { depositeWithConversion as deposite };
export default accountSlice.reducer;
