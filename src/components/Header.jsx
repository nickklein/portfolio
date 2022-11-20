import React from 'react'
import Button from './atoms/Button'
import HeaderBackground from '../images/header_background.JPG';

function Header() {
    const githubUrl = "http://github.com/nickklein"; // TODO pass these variables from app.jsx

    return (
        <div>
            <section className={"relative flex items-center hero-container bg-fixed bg-no-repeat bg-center bg-cover w-full h-screen"}>
                <img className="svg-border header-bottom absolute bottom-[-5px] left-0 w-full" src="data:image/svg+xml; utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='-1.5 711.65 1443 105.85' width='1443' height='105.85'><path d=' M 0 816 L 0 759 L 709.5 780 L 1440 713.15 L 1440 816 L 889 816 L 551 816 L 0 816 L 0 816 Z ' fill='rgb(255,255,255)' vector-effect='non-scaling-stroke' stroke-width='1' stroke='rgb(255,255,255)' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/></svg>" />
                <div className="introduction animate fade-in w-[50%] mx-auto text-center">
                    <h1 className="text-7xl text-white font-bold">Hi, I'm <span>Nick</span></h1>
                    <p className="text-3xl text-white">I build web applications</p>
                    <div className="inline-flex mt-5">
                        <div className="mx-1">
                            <Button 
                                href="#" 
                                label="View Work" 
                                type="secondary"
                            />
                        </div>

                        <div className="mx-1">
                            <Button 
                                href={githubUrl} 
                                label="Visit Github" 
                                type="secondary" 
                            />
                        </div>
                    </div>
                </div>
                <div id="arrow"></div>
            </section>
        </div>
    )
}

export default Header