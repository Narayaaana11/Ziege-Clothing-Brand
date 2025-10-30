// This is an example of how your Admin.tsx might look
// to integrate the sidebar, navbar, and dashboard content

import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Dashboard from "@/components/admin/Dashboard";
// Import other admin pages as needed
// import AdminProducts from "@/components/admin/AdminProducts";
// import AdminOrders from "@/components/admin/AdminOrders";

import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

// This layout component ensures the sidebar and navbar are on all admin pages
const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-background text-text-primary">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : "lg:ml-20"
        }`}
      >
        <AdminNavbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 bg-background">
          {/* Outlet renders the matched child route */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// This is the main Admin component that sets up the routes
const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* The index route defaults to the Dashboard */}
        <Route index element={<Dashboard />} />
        
        {/* Add other admin routes here */}
        {/* <Route path="products" element={<AdminProducts />} /> */}
        {/* <Route path="orders" element={<AdminOrders />} /> */}
        {/* <Route path="ai-designs" element={<div>AI Designs Page</div>} /> */}
        {/* <Route path="users" element={<div>Users Page</div>} /> */}
        {/* <Route path="analytics" element={<div>Analytics Page</div>} /> */}
        {/* <Route path="settings" element={<div>Settings Page</div>} /> */}
      </Route>
    </Routes>
  );
};

export default Admin;
