/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const MenuItems = ({ items, all, breakfast, lunch, shakes }) => {
  return (
    <div
      className="MenuItems container"
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 70px;

        .menu-items {
          padding: 1rem;
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
          <div className="menu-items" key={item.id}>
            <img
              src="https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png"
              alt="food burger"
            />
            <div className="item-content">
              <div className="item-title-box">
                <h5 className="item-title">{item.title}</h5>
                <h5 className="item-price">{item.price}</h5>
              </div>
              <p className="item-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      {breakfast &&
        items
          .filter((item) => item.category === "breakfast")
          .map((item) => (
            <div className="menu-items" key={item.id}>
              <img
                src="https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png"
                alt="food burger"
              />
              <div className="item-content">
                <div className="item-title-box">
                  <h5 className="item-title">{item.title}</h5>
                  <h5 className="item-price">{item.price}</h5>
                </div>
                <p className="item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
      {lunch &&
        items
          .filter((item) => item.category === "lunch")
          .map((item) => (
            <div className="menu-items" key={item.id}>
              <img
                src="https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png"
                alt="food burger"
              />
              <div className="item-content">
                <div className="item-title-box">
                  <h5 className="item-title">{item.title}</h5>
                  <h5 className="item-price">{item.price}</h5>
                </div>
                <p className="item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
      {shakes &&
        items
          .filter((item) => item.category === "shakes")
          .map((item) => (
            <div className="menu-items" key={item.id}>
              <img
                src="https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png"
                alt="food burger"
              />
              <div className="item-content">
                <div className="item-title-box">
                  <h5 className="item-title">{item.title}</h5>
                  <h5 className="item-price">{item.price}</h5>
                </div>
                <p className="item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default MenuItems;
