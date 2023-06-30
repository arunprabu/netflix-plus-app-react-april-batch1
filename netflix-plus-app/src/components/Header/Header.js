// Functional Component with Named Function

import { useContext } from 'react';
import MenuList from '../MenuList/MenuList';
import { CartContext } from '../../contexts/CartContext';

// imports (optional)
// comp defn
// must return JSX
// export

function Header () {
  const cart = useContext(CartContext);
  console.log(cart);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Netflix Plus App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />

            <button className="btn btn-danger" type="button">
              Cart ({cart.cartState?.length === undefined ? '0' : cart.cartState?.length})
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
