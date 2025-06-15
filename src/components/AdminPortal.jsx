import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/AdminPortal.css';

export default function AdminPortal() {
  return (
    <div className="admin-portal">
      <h2>Admin Portal</h2>
      <nav>
        <Link to="new">Add New Book</Link>
      </nav>
      <Outlet />
    </div>
  );
}