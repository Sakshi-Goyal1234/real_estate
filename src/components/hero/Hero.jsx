import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import React from 'react';
import CountUp from 'react-countup';
export default function Hero()
{    
    return(
        <>
        <div className="hero-wrapper">
           <div className="hero-container h-container">
            <div className="hero-left">
                  <div className="hero-title">
                    <div className="orange"></div>
                    <h1>
                        Discover<br/>
                        Most Suitable<br/>
                        Property
                    </h1>
                  </div>
                  <div className="hero-des">
                  <span>
                    Find a variety of properties that suit you very
                    easily.
                  </span>
                  <br/>
                  <span>Forget all difficultites in finding a residence for you</span>
                  </div>

                   <div className="search-bar">
                    <HiLocationMarker color="blue" size={25}/>
                    <input></input>
                    {/* <input type="text"> </input> */}
                    <button className="button">Search</button>
                  </div> 
                  <div className="counting">
                    <div className="premium">
                      <span className="count">
                        <CountUp start={8800} end={9000} duaration={4}/></span>
                        <span>+</span>
                        <br/>
                        <span className="count-des">
                          premium products
                        </span>
                      
                    </div>

                    <div className="Happy">
                      <span className="count">
                        <CountUp start={1950} end={2000} duaration={4}/>
                        </span>
                        <span>+</span>
                        <br/>
                        <span className='count-des'>
                          Happy Customers
                        </span>
                    </div>
                    <div className="Award">
                      <span className="count">
                        <CountUp start={1} end={28} duaration={4}/></span>
                        <span>+</span>
                        <br/>
                        <span className="count-des">
                          Award Winning
                        </span>
                      
                    </div>
                  </div>
            </div>
            <div className="hero-right">
             <div className="image-container">
                <img src="/hero-image.png" width={100} height={100}></img>
             </div>

            </div>
           </div>
        </div>
        </>
    )
}