/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";
import AllItems from "./MenuAll";
import Breakfast from "./MenuBreakfast";
import Lunch from "./MenuLunch";
import Shakes from "./MenuShakes";

const MenuItems = ({ items, all, breakfast, lunch, shakes }) => {
  const list = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  const itemList = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="MenuItems container"
      variants={container}
      initial="hidden"
      animate="visible"
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 30px;
        padding: 40px 0;
        background: #fff;
        border-radius: 50px;
      `}
    >
      <AllItems all={all} items={items} />
      <Breakfast breakfast={breakfast} items={items} />
      <Lunch lunch={lunch} items={items} />
      <Shakes shakes={shakes} items={items} />
    </motion.div>
  );
};

export default MenuItems;
