import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Dashboard } from "../pages/Dashboard";
import { QuestionsPage } from "../pages/QuestionsPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="questions" element={<QuestionsPage />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};
