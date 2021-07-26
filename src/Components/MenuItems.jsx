/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const MenuItems = ({ Items }) => {
    return (
        <div 
        className='MenuItems container'
        css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;

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
        `}>
            {Items.map((item) => (
                <div className='menu-items' >
                    <img src='https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png' alt="food burger" />
                <h5 className='item-title' >{item.title}</h5>
                <h6 className='item-category' >{item.category}</h6>
                <p className='item-desc' >{item.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default MenuItems
