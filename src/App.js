import "./App.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { NavContext } from "./contexts/NavContext";

function App() {
  return (
    <NavContext.Provider>
      <div className="App">
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
    </NavContext.Provider>
  );
}

export default App;
