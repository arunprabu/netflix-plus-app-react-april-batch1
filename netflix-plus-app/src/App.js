// App component is made up of JS, JSX and CSS (optional)
// js 

import './App.css'; // CSS for App component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

// App is a component
// Comp definition
function App() {
  // must return JSX
  return (
    <div>
      <Header></Header>

      <main className="container mt-5 pt-2">
        <HomePage/>
      </main>

      <Footer />
    </div>
  );
}

// default export
export default App;