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

// App is a component
// Comp definition
function App() {
  // must return JSX
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div>
          <Header></Header>

          <main className="container mt-5 pt-2">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about-us" element={<AboutUsPage />}></Route>
                <Route path="/contact-us" element={<ContactUsPage />}></Route>
              </Routes>
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