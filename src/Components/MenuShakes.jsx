import { motion } from "framer-motion";

const MenuShakes = ({ shakes, items }) => {
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
      {shakes &&
        items
          .filter((item) => item.category === "shakes")
          .map((item, i) => (
            <motion.div
              className="menu-items"
              key={item.id}
              variants={itemContainer}
              transition={{ delay: i * 0.3 }}
            >
              <img
                src="https://assets.umso.co/1/refreshing_ncum.svg"
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

export default MenuShakes;
