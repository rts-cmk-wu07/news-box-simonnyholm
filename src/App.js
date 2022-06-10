import "./App.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
