import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Define your components
function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Mile High.World</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main>
        <p>Start building your music platform!</p>
      </main>
      <footer>
        <p>&copy; 2024 Mile High.World</p>
      </footer>
    </div>
  );
}

// Render your app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);