import React from 'react'

function Expertise() {
    return (
        <section class="expertise section-container">
            <div class="introduction">
                <h2 class="featured" data-expertise="Expertise" data-skills="My Skills">Expertise</h2>
            </div>
            <div class="container">
                <ul class="exp-container">
                    <li class="exp-item row wpjs slide-left animate">
                        <span class="icons col-3">
                            <img src="https://www.nickklein.ca/wp-content/uploads/2018/10/speedometer.png" alt="" />
                            
                        </span>

                        <div class="info col-9">
                            <h3>Speed</h3>
                            Fast performance and load times across varied applications
                        </div>
                    </li>
                    <li class="exp-item row wpjs slide-left animate">
                            <span class="icons col-3">
                                <img src="https://www.nickklein.ca/wp-content/uploads/2018/10/gear.png" alt="" />
                                
                            </span>

                            <div class="info col-9">
                                <h3>Dynamic</h3>
                                Turning static websites into dynamic ones
                            </div>
                    </li>
                </ul>
                
                <ul class="exp-container">
                    <li class="exp-item row wpjs slide-left animate">
                        <span class="icons col-3">
                            <img src="https://www.nickklein.ca/wp-content/uploads/2018/10/wp.png" alt="" />
                            
                        </span>

                        <div class="info col-9">
                            <h3>Laravel and React</h3>
                            Flexible back-ends that allow you to add, remove and sort content
                        </div>
                    </li>
                    <li class="exp-item row wpjs slide-left animate">
                            <span class="icons col-3">
                                <img src="https://www.nickklein.ca/wp-content/uploads/2018/10/monitor.png" alt="" />
                                
                            </span>

                            <div class="info col-9">
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