/**@jsxRuntime classic*/
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Buttons = ({ setAll, setBreakfast, setLunch, setShakes }) => {
  return (
    <div
      className="Buttons"
      css={css`
        display: flex;
        justify-content: center;
        padding: 50px 0 0 0;

        button {
          margin: 0 5px;
          width: 4rem;
        }
      `}
    >
      <button
        onClick={() => {
          setAll(true);
          setAll(false);
          setBreakfast(false);
          setLunch(false);
          setShakes(false);
        }}
      >
        All
      </button>

      <button
        onClick={() => {
          setBreakfast(true);
          setAll(false);
          setAll(false);
          setLunch(false);
          setShakes(false);
        }}
      >
        Breakfast
      </button>

      <button
        onClick={() => {
          setLunch(true);
          setAll(false);
          setAll(false);
          setBreakfast(false);
          setShakes(false);
        }}
      >
        Lunch
      </button>

      <button
        onClick={() => {
          setShakes(true);
          setAll(false);
          setAll(false);
          setBreakfast(false);
          setLunch(false);
        }}
      >
        Shakes
      </button>
    </div>
  );
};

export default Buttons;
