import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isLogged: boolean;
  uid: string;
  nome: string;
  email: string;
};

const initialState: UserState = {
  isLogged: false,
  uid: "",
  nome: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.nome = action.payload.nome;
      state.email = action.payload.email;
      state.isLogged = action.payload.isLogged;
      state.uid = action.payload.uid;
    },
    logout: () => initialState,
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
