import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  loading: boolean;
}

const initialState: ThemeState = {
  loading: false,
};

export const loagingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<ThemeState["loading"]>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loagingSlice.actions;
export default loagingSlice.reducer;
