// App component is made up of JS, JSX and CSS (optional)
// js 

import './App.css'; // CSS for App component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// App is a component
// Comp definition
function App() {
  // must return JSX
  return (
    <div>
      <Header></Header>

      <main>
        <h1>Success!</h1>
      </main>
      
      <Footer />
    </div>
  );
}

// default export
export default App;