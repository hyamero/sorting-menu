/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState } from "react";

import MenuItems from "./Components/MenuItems";
import MenuData from "./Components/MenuData";
import Buttons from "./Components/Buttons";

function App() {
  const [all, setAll] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [shakes, setShakes] = useState(false);

  return (
    <div
      className="App"
      css={css`
        background: coral;
        height: 100vh;
      `}
    >
      <Buttons 
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
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .container {
            width: 80%;
            padding: 100px 0;
            margin: auto;
          }
        `}
      />
    </div>
  );
}

export default App;
