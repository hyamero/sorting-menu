/**@jsxRuntime classic*/
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Buttons = ({ setBreakfast }) => {
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
      <button>All</button>
      <button 
      onClick={() => {
          setBreakfast(true);
      }}>Breakfast</button>
      <button>Lunch</button>
      <button>Shakes</button>
    </div>
  );
};

export default Buttons;
