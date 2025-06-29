// router.tsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { CarDetail } from "../pages/Car";
import { Dashboard } from "../pages/Dashboard";
import { DashboardNew } from "../pages/Dashboard/New";
import { Error } from "../pages/Error";
import { Private } from "./private";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🔹 Rotas com layout principal */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="car-detail" element={<CarDetail />} />
        <Route path="dashboard">
          <Route
            index
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
          <Route
            path="new"
            element={
              <Private>
                <DashboardNew />
              </Private>
            }
          />
        </Route>
      </Route>

      {/* 🔹 Rotas sem layout */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </>
  )
);
