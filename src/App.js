/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";

import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";
import { NavContext } from "./Contexts/NavContext";

function App() {
  const styles = {
    app: css`
      padding: 20px 20px 20px 20px;
    `,
  };
  return (
    <NavContext.Provider value={false}>
      <div css={styles.app} className="App">
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
    </NavContext.Provider>

  );
}

export default App;
