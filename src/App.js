import "./App.css";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  const linkIcon = "Icon"; /*conditional rendering herunder*/
  const linkPath = "Path";
  const appHeading = "Heading";
  return (
    <div className="App">
      <Nav linkIcon={linkIcon} linkPath={linkPath} appHeading={appHeading} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
