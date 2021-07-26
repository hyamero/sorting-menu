/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect } from "react";

import MenuItems from "./Components/MenuItems";
import MenuData from "./Components/MenuData";
import Navbar from "./Components/Navbar";

function App() {
  const [all, setAll] = useState(true);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [shakes, setShakes] = useState(false);

  return (
    <div
      className="App"
      css={css`
        background: #f0eff1;
        height: 100vh;
      `}
    >
      <Navbar
        setAll={setAll}
        setBreakfast={setBreakfast}
        setLunch={setLunch}
        setShakes={setShakes}
      />

      <MenuItems
        items={MenuData}
        all={all}
        breakfast={breakfast}
        lunch={lunch}
        shakes={shakes}
      />

      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          .container {
            width: 80%;
            margin: auto;
          }
        `}
      />
    </div>
  );
}

export default App;
