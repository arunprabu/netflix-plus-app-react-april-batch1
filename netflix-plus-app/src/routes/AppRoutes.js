import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// the following components are loaded by default
import HomePage from '../pages/HomePage/HomePage';
import HocDemoPage from '../pages/HocDemoPage/HocDemoPage';

// the following components are lazy loaded -- also refer suspense
const AboutUsPage = React.lazy(() => import('../pages/AboutUsPage/AboutUsPage'));
const ContactUsPage = React.lazy(() => import('../pages/ContactUsPage/ContactUsPage'));
const HooksDemoPage = React.lazy(() => import('../pages/HooksDemoPage/HooksDemoPage'));
const ShopPage = React.lazy(() => import('../pages/ShopPage/ShopPage'));
const UnitTestingDemo = React.lazy(() => import('../pages/UnitTestingDemo/UnitTestingDemo'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="spinner-border"></div>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/hoc-demo" element={<HocDemoPage />}></Route>
        <Route path="/about-us" element={<AboutUsPage />}></Route>
        <Route path="/contact-us" element={<ContactUsPage />}></Route>
        <Route path="/hooks-demo" element={<HooksDemoPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/unit-testing-demo" element={<UnitTestingDemo />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
