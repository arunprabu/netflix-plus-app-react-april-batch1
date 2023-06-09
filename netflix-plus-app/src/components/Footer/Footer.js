// Functional Component with Anonymous Function

/*
  * imports (optional)
  * comp defn 
  *   * must return jsx
  * export
*/
import MenuList from "../MenuList/MenuList";

const Footer = function() {
  const copyrightYear = 2023;
  const developerName = 'Arun';

  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>
        Copyright {copyrightYear} | {developerName}
      </p>
    </footer>
  );
}

export default Footer;

