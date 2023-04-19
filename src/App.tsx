import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/student";
import AuthLayout from "layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="student/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/student" replace />} />
    </Routes>
  );
};

export default App;
