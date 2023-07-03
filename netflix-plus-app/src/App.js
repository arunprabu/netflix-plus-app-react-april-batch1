// App component is made up of JS, JSX and CSS (optional)
// js

import './App.css'; // CSS for App component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';

import { BrowserRouter } from 'react-router-dom';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import { useReducer } from 'react';
import cartReducer from './reducers/cartReducer';
import AppRoutes from './routes/AppRoutes';

// App is a component
// Comp definition
function App () {
  const userStatus = {
    inLoggedIn: true,
    lastLogin: 'yesterday 1pm'
  }

  // supply state (needed for header comp) and
  // dispatcher fn (needed for ShopPage comp) thru cart context.
  const [cartState, cartDispatch] = useReducer(cartReducer);
  console.log(cartState); // needed for header comp
  console.log(cartDispatch); // needed for ShopPage comp

  const cart = {
    cartState,
    cartDispatch
  };

  // must return JSX
  return (
    <ErrorBoundary>
      <CartContext.Provider value={cart}>
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
                  <AppRoutes />
                </PageContext.Provider>
              </ErrorBoundary>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </CartContext.Provider>
    </ErrorBoundary>
  );
}

// default export
export default App;
