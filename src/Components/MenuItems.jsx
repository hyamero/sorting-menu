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

        .menu-items {
            padding: 1rem;
        }

        img {
          height: 100px;
        }

        .item-title {
          font-size: 1.3rem;
        }

        .item-category {
          font-size: 1.2rem;
        }

        .item-desc {
          font-size: 1rem;
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
            <h5 className='item-price' >{item.price}</h5>
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
              <div className="item-title-box">
              <h5 className="item-title">{item.title}</h5>
            <h5 className='item-price' >{item.price}</h5>
              </div>
              <p className="item-desc">{item.desc}</p>
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
              <div className="item-title-box">
              <h5 className="item-title">{item.title}</h5>
            <h5 className='item-price' >{item.price}</h5>
              </div>
              <p className="item-desc">{item.desc}</p>
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
              <div className="item-title-box">
              <h5 className="item-title">{item.title}</h5>
            <h5 className='item-price' >{item.price}</h5>
              </div>
              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
    </div>
  );
};

export default MenuItems;
