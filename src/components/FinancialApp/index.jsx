// ./components/FinancialApp/index.js

import React from "react";
import Sidebar from "./Sidebar";

export default function FinancialApp(props) {
  return (
    <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Sidebar />

      {/* Contenido de las rutas */}
      {props.children}
    </div>
  );
}
