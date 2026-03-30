import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import AdminRoutes from "./admin/routes/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
<Routes>
        {/* User Routes */}
        <Route path="/*" element={<AppRoutes />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;