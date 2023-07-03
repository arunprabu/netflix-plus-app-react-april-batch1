import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import HocDemoPage from '../pages/HocDemoPage/HocDemoPage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage';
import HooksDemoPage from '../pages/HooksDemoPage/HooksDemoPage';
import ShopPage from '../pages/ShopPage/ShopPage';
import UnitTestingDemo from '../pages/UnitTestingDemo/UnitTestingDemo';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="hoc-demo" element={<HocDemoPage />}></Route>
      <Route path="/about-us" element={<AboutUsPage />}></Route>
      <Route path="/contact-us" element={<ContactUsPage />}></Route>
      <Route path="/hooks-demo" element={<HooksDemoPage />}></Route>
      <Route path="/shop" element={<ShopPage />}></Route>
      <Route path="/unit-testing-demo" element={<UnitTestingDemo />}></Route>
    </Routes>
  );
}

export default AppRoutes;
