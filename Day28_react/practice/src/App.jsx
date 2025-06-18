import "./App.css";
import Navigation from "./pages/Navigation";
import AdImage from './pages/AdImage';

function App() {
  return (
    <div className="container">
      <main className="main">
        <Navigation />
      </main>
      <aside className="side-img">
        <AdImage />
      </aside>
    </div>
  );
}

export default App;
