/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";

const MenuItems = ({ items, all, breakfast, lunch, shakes }) => {
  const list = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  const itemList = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div
      className="MenuItems container"
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 70px;

        .menu-items {
          padding: 1rem 2.5rem;
          display: flex;

          .item-content {
            display: grid;
            padding: 0 1rem;

            p {
              font-size: 0.8rem;
            }

            .item-title-box {
              display: flex;
              justify-content: space-between;

              .item-title,
              .item-price {
                font-size: 1rem;
              }
            }
          }
        }

        img {
          height: 100px;
        }
      `}
    >
      {all &&
        items.map((item) => (
          <motion.div
            className="menu-items"
            key={item.id}
            initial="hidden"
            animate="visible"
            variants={list}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png"
              alt="food burger"
            />
            <motion.div className="item-content">
              <motion.div className="item-title-box">
                <motion.h5
                  className="item-title"
                  variants={itemList}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {item.title}
                </motion.h5>
                <motion.h5
                  className="item-price"
                  variants={itemList}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {item.price}
                </motion.h5>
              </motion.div>
              <motion.p
                className="item-desc"
                variants={itemList}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      {breakfast &&
        items
          .filter((item) => item.category === "breakfast")
          .map((item) => (
            <motion.div
              className="menu-items"
              key={item.id}
              initial="hidden"
              animate="visible"
              variants={list}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png"
                alt="food burger"
              />
              <motion.div className="item-content">
                <motion.div className="item-title-box">
                  <motion.h5
                    className="item-title"
                    variants={itemList}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {item.title}
                  </motion.h5>
                  <motion.h5
                    className="item-price"
                    variants={itemList}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    {item.price}
                  </motion.h5>
                </motion.div>
                <motion.p
                  className="item-desc"
                  variants={itemList}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
      {lunch &&
        items
          .filter((item) => item.category === "lunch")
          .map((item) => (
            <motion.div
              className="menu-items"
              key={item.id}
              initial="hidden"
              animate="visible"
              variants={list}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png"
                alt="food burger"
              />
              <motion.div className="item-content">
                <motion.div className="item-title-box">
                  <motion.h5
                    className="item-title"
                    variants={itemList}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {item.title}
                  </motion.h5>
                  <motion.h5
                    className="item-price"
                    variants={itemList}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    {item.price}
                  </motion.h5>
                </motion.div>
                <motion.p
                  className="item-desc"
                  variants={itemList}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
      {shakes &&
        items
          .filter((item) => item.category === "shakes")
          .map((item) => (
            <motion.div
              className="menu-items"
              key={item.id}
              initial="hidden"
              animate="visible"
              variants={list}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png"
                alt="food burger"
              />
              <motion.div className="item-content">
                <motion.div className="item-title-box">
                  <motion.h5
                    className="item-title"
                    variants={itemList}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {item.title}
                  </motion.h5>
                  <motion.h5
                    className="item-price"
                    variants={itemList}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    {item.price}
                  </motion.h5>
                </motion.div>
                <motion.p
                  className="item-desc"
                  variants={itemList}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
    </div>
  );
};

export default MenuItems;
