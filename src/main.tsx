import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Provider } from "react-redux";
import { store } from "./shared/redux/store";
import { Loading } from "./shared/components/Loading";
import { Alert } from "./shared/components/Alert";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Loading />
      <Alert />
    </Provider>
  </StrictMode>
);
