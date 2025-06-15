import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Shop from './components/Shop';
import ProductPage from './components/ProductPage';
import AdminPortal from './components/AdminPortal';
import ProductForm from './components/ProductForm';
import EditProductForm from './components/EditProductForm';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPortal />}>
          <Route index element={<Navigate to="new" replace />} />
          <Route path="new" element={<ProductForm />} />
          <Route path="edit/:id" element={<EditProductForm />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;