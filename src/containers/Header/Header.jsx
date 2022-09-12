import React from 'react'
import './header.css'
import bgImage from '../../assets/bg-image.jpg'
import bgRectangle from '../../assets/Rectangle.svg'

const Header = () => {
    return (
        <div className='pd__header' id='home'>
            <div className='pd__header-content'>
                <div className='pd__header-bg-image'>
                    <img src={bgImage} alt="Background" />
                </div>
                <div className='pd__header-bg_shape'> </div>
                <div className='pd__header-bg-rectangle'>
                    <img src={bgRectangle} alt="Rectangle" />
                </div>
                <div className='pd__header-intro'>
                    <div className='pd__header-intro-left'></div>
                    <div className='pd__header-intro-right'>
                        <h1>Introduction</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae libero dicta. Itaque suscipit, porro, accusantium aperiam dolorum ut explicabo vel corporis eos labore veniam, consequatur eum deleniti velit earum?</p>
                        <button type='button'>See More</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Header