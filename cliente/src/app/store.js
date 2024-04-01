import { configureStore } from "@reduxjs/toolkit";
import propiedadesReducer from "../features/propiedades/propiedadesSlice";

export const store = configureStore({
  reducer: {
    propiedades: propiedadesReducer,
  },
});
