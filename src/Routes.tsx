import { Route, Routes as RouterRoutes } from "react-router-dom";

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<>web-starter</>} />
    </RouterRoutes>
  );
}
