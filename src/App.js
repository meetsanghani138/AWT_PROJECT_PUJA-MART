import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import AdminRoutes from "./admin/routes/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <AdminRoutes />
    </BrowserRouter>
  );
}

export default App;