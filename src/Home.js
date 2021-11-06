import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="amazon_banner.jpeg" alt="" />
            
                <div className="home__row">
                    <Product 
                    id="1"
                    title='The Lean Startup' price={29.99} image="lean_startup.jpeg" rating={5}/>

                    <Product
                    id="2"
                    title="Jeremy's Toy" price={529.99} image="jeremy_toy.jpg" rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                    id="3"
                    title="Mama's Bag" price={41.99} image="mama_bag.jpg" rating={3}
                    />

                    <Product
                    id="4"
                    title="Ate's Card Number" price={1699.99} image="card.jpg" rating={5}
                    />
                    
                    <Product
                    id="5"
                    title="Ate's Brain" price={0.99} image="ate_brain.jpeg" rating={1}
                    />
                </div>

                <div className="home__row">
                    <Product
                    id="6"
                    title="Candy" price={997.21} image="candy.jpeg" rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home