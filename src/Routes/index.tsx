import { Route, Routes } from "react-router-dom";
import { ProviderContextRovers } from "../Context/ContextRovers/ContextRovers";
import { RoversPage } from "../pages/RoversPage";

export function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/rovers"
        element={
          <ProviderContextRovers>
            <RoversPage />
          </ProviderContextRovers>
        }
      />
      <Route
        path="*"
        element={
          <ProviderContextRovers>
            <RoversPage />
          </ProviderContextRovers>
        }
      />
    </Routes>
  );
}
