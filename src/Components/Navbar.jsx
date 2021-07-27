/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import Buttons from "./Buttons";

const Navbar = ({ setAll, setBreakfast, setLunch, setShakes }) => {
  return (
    <div
      className="Navbar"
      css={css`
        display: flex;
        justify-content: space-around;
        padding: 50px 0 0 0;

        .logo {
          font-size: 1.8rem;
        }
      `}
    >
      <h3 className="logo">Exper.</h3>
      <Buttons
        setAll={setAll}
        setBreakfast={setBreakfast}
        setLunch={setLunch}
        setShakes={setShakes}
      />
      <h3>dine with us.</h3>
    </div>
  );
};

export default Navbar;
