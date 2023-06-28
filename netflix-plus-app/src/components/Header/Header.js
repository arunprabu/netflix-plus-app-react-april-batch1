// Functional Component with Named Function

import MenuList from '../MenuList/MenuList';

// imports (optional)
// comp defn
// must return JSX
// export

function Header () {
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
              Cart (0)
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
