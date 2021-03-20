import React from 'react';
import './Home.css';
import bgImg from '../../images/Bg.png';
import bike from '../../images/Frame.png';
import privateCar from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';

const Home = () => {
    const imgStyle = {}
    return (
        <div>
            <div className="top-fixedBanner">

                <div className="card-container">
                    <div className="cardDiv">
                        <img className='imgStyle' src={bike} alt="" />
                        <div className="cardTitle">
                            <h4>BIKE</h4>
                            <button style={{color: 'red'}}>BOOK NOW</button>
                        </div>
                    </div>

                    <div className="cardDiv">
                        <img className='imgStyle' src={privateCar} alt="" />
                        <div className="cardTitle">
                            <h4>CAR</h4>
                            <button style={{color: 'red'}}>BOOK NOW</button>
                        </div>
                    </div>

                    <div className="cardDiv">
                        <img className='imgStyle' src={bus} alt="" />
                        <div className="cardTitle">
                            <h4>BUS</h4>
                            <button style={{color: 'red'}}>BOOK NOW</button>
                        </div>
                    </div>

                    <div className="cardDiv">
                        <img className='imgStyle' src={train} alt="" />
                        <div className="cardTitle">
                            <h4>TRAIN</h4>
                            <button style={{color: 'red'}}>BOOK NOW</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;