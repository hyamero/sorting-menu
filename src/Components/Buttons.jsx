/**@jsxRuntime classic*/
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Buttons = ({ setAll, setBreakfast, setLunch, setShakes }) => {
  return (
    <div
      className="Buttons"
      css={css`
        display: flex;

        button {
          margin: 0 2rem;
          border: none;
          padding: 10px;
          cursor: pointer;
          transition: 0.3s linear;

          &::after {
            content: "";
            display: block;
            height: 2px;
            width: 0;
            background: #24242a;
            transition: width 0.3s ease-in;
          }

          &:hover::after {
            width: 100%;
          }

          span {
            padding: 0 5px;
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 1rem;
            margin: auto;
          }
        }
      `}
    >
      <button
        onClick={() => {
          setAll(true);
          setBreakfast(false);
          setLunch(false);
          setShakes(false);
        }}
      >
        <span>All</span>
      </button>

      <button
        onClick={() => {
          setBreakfast(true);
          setAll(false);
          setLunch(false);
          setShakes(false);
        }}
      >
        <span>Breakfast</span>
      </button>

      <button
        onClick={() => {
          setLunch(true);
          setAll(false);
          setBreakfast(false);
          setShakes(false);
        }}
      >
        <span>Lunch</span>
      </button>

      <button
        onClick={() => {
          setShakes(true);
          setAll(false);
          setBreakfast(false);
          setLunch(false);
        }}
      >
        <span>Shakes</span>
      </button>
    </div>
  );
};

export default Buttons;
