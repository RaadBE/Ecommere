import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Adding from './Add-pro';
import Update from './update';
function AdminRoutes() {
    return (
        <Routes>
            {/* Define your specific admin routes here */}
            <Route path="/" element={<AdminLayout />} />
            <Route path="/add-product" element={<Adding />} />
            <Route path="/update-product" element={<Update />} />
            {/* ... other admin routes ... */}
        </Routes>
    );
}

export default AdminRoutes;