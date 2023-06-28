// App component is made up of JS, JSX and CSS (optional)
// js

import './App.css'; // CSS for App component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import HocDemoPage from './pages/HocDemoPage/HocDemoPage';
import HooksDemoPage from './pages/HooksDemoPage/HooksDemoPage';
import { PageContext } from './contexts/PageContext';
import ShopPage from './pages/ShopPage/ShopPage';

// App is a component
// Comp definition
function App () {
  const userStatus = {
    inLoggedIn: true,
    lastLogin: 'yesterday 1pm'
  }

  // must return JSX
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div>
          <Header></Header>

          <main className="container mt-5 pt-2">
            <ErrorBoundary>
              {/* Step 2 of Context API:
                Using <PageContext.Provider> to share the data across the select few components
                // for step 3 refer ContactUsPage.js
              */}
              <PageContext.Provider value={userStatus}>
                <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="hoc-demo" element={<HocDemoPage />}></Route>
                  <Route path="/about-us" element={<AboutUsPage />}></Route>
                  <Route path="/contact-us" element={<ContactUsPage />}></Route>
                  <Route path="/hooks-demo" element={<HooksDemoPage />}></Route>
                  <Route path="/shop" element={<ShopPage />}></Route>
                </Routes>
              </PageContext.Provider>
            </ErrorBoundary>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

// default export
export default App;
