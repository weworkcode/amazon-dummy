import React from 'react'
import './Header.css'
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <a href="/">
                <img className='header__logo' 
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            </a>

            <div className="header__search">
                <input className='header__searchInput' 
                type="text" name="" id="" />
                
                <img className="header__searchIcon" src="search_icon.png" alt="" />
            </div>

            <div className="header__nav">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>Sign in
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns
                    </span>
                    <span className='header__optionLineTwo'>& Orders
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your
                    </span>
                    <span className='header__optionLineTwo'>Prime
                    </span>
                </div>

            <a href="/checkout">
                <div className="header__optionBasket">
                    <img className='header__basketIcon' src="basket_icon.png" alt="" />
                    
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </a>

            </div>

        </div>
    )
}

export default Header
