import React from 'react'
import '../../scss/components/expertise.scss'


function Expertise(): JSX.Element  {
    return (
        <section className="expertise section-container">
            <div className="introduction">
                <h2 className="featured" data-expertise="Expertise" data-skills="My Skills">Expertise</h2>
            </div>
            <div className="container">
                <ul className="exp-container">
                    <li className="exp-item row wpjs slide-left animate">
                        <span className="icons col-3">
                            <img src="https://www.nickklein.ca/wp-content/uploads/2018/10/speedometer.png" alt="" />
                            
                        </span>

                        <div className="info col-9">
                            <h3>Speed</h3>
                            Fast performance and load times across varied applications
                        </div>
                    </li>
                    <li className="exp-item row wpjs slide-left animate">
                            <span className="icons col-3">
                                <img src="https://www.nickklein.ca/wp-content/uploads/2018/10/gear.png" alt="" />
                                
                            </span>

                            <div className="info col-9">
                                <h3>Dynamic</h3>
                                Turning static websites into dynamic ones
                            </div>
                    </li>
                </ul>
                
                <ul className="exp-container">
                    <li className="exp-item row wpjs slide-left animate">
                        <span className="icons col-3">
                            <img src="https://www.nickklein.ca/wp-content/uploads/2018/10/wp.png" alt="" />
                            
                        </span>

                        <div className="info col-9">
                            <h3>Laravel and React</h3>
                            Flexible back-ends that allow you to add, remove and sort content
                        </div>
                    </li>
                    <li className="exp-item row wpjs slide-left animate">
                            <span className="icons col-3">
                                <img src="https://www.nickklein.ca/wp-content/uploads/2018/10/monitor.png" alt="" />
                                
                            </span>

                            <div className="info col-9">
                                <h3>Responsive</h3>
                                Websites will work on all device sizes
                            </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}

export default Expertise