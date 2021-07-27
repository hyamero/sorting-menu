import { motion } from "framer-motion";

const MenuAll = ({ all, items }) => {
  const itemList = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {all &&
        items.map((item, i) => (
          <motion.div
            className="menu-items"
            key={item.id}
            variants={itemContainer}
            transition={{ delay: i * 0.3 }}
          >
            <img
              src="https://global-uploads.webflow.com/5e7e842ba1676d8251b3a0cf/5e9532284d835ba63640cd18_undraw_wine_tasting_30vw.svg"
              alt="food burger"
            />
            <motion.div className="item-content">
              <motion.div className="item-title-box">
                <motion.h5
                  className="item-title"
                  variants={itemList}
                  transition={{ delay: i * 0.1 + 0.6, duration: 0.5 }}
                >
                  {item.title}
                </motion.h5>
                <motion.h5
                  className="item-price"
                  variants={itemList}
                  transition={{ delay: i * 0.1 + 0.8, duration: 0.5 }}
                >
                  ${item.price}
                </motion.h5>
              </motion.div>
              <motion.p
                className="item-desc"
                variants={itemList}
                transition={{ delay: i * 0.1 + 1.2, duration: 0.5 }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
    </>
  );
};

export default MenuAll;
