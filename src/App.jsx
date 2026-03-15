import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import PharmacyLayout from "./layout/PharmacyLayout";

import InventoryPage from "./pages/InventoryPage";

function App() {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        <Route index element={<Navigate to="/dashboard" />} />

        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="appointments" element={<div>Appointments</div>} />
        <Route path="patients" element={<div>Patients</div>} />
        <Route path="billing" element={<div>Billing</div>} />
        <Route path="settings" element={<div>Settings</div>} />

        {/* PHARMACY MODULE */}
        <Route path="pharmacy" element={<PharmacyLayout />}>

          <Route index element={<Navigate to="inventory" />} />

          <Route path="inventory" element={<InventoryPage />} />

          <Route path="logs" element={<div>Logs Page</div>} />

          <Route path="sales" element={<div>Sales Page</div>} />

        </Route>

      </Route>

    </Routes>
  );
}

export default App;