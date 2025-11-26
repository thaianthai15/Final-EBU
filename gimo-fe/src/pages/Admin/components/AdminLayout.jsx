// src/pages/Admin/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../../../components/layout/admin/Header'; // Đường dẫn tới Header của admin

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Bạn có thể thêm Sidebar ở đây sau */}
      {/* <AdminSidebar /> */}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {/* Nội dung của các trang admin con sẽ được render ở đây */}
            <Outlet /> 
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;