import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards.js';
import SwipeButtons from './SwipeButtons.js';

function App() {
  return (
    <div className="app">
      {/* Header Bar */}
      <Header />

      {/* Profile Picture Swipes */}
      <TinderCards />

      {/* Bottom Nav Interface */}
      <SwipeButtons />
    </div>
  );
}

export default App;
