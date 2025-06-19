import "./App.css";
import LoginImage from "./pages/LoginImage";
import LoginInfo from "./pages/LoginInfo";

function App() {
  return (
    <div className="back__container w-full h-full">
      <div className="main__container w-7/10 h-9/10 rounded-2xl bg-white shadow-2xl">
        <main className="w-1/2 h-full">
          <LoginInfo />
        </main>
        <aside className="w-1/2 h-full">
          <LoginImage />
        </aside>
      </div>
    </div>
  );
}

export default App;
