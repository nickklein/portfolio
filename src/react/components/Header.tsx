import React from 'react'
import Button from './atoms/Button'
import '../../scss/components/header.scss'
import { Link } from 'react-router-dom';


interface Props {
    title: JSX.Element|string,
    subHeader?: string,
    short?: boolean,
    hasDivider?: boolean
    color?: string,
    backgroundImage?: string,
    buttons?: {
      label: string;
      href: string;
      styleType: string,
      onClick?: React.MouseEventHandler,
    }[];
}

Header.defaultProps = {
    short: false,
    hasDivider: true
}

function Header(props: Props): JSX.Element {
    const {title, subHeader, color, backgroundImage, short, hasDivider, buttons} = props;
    let heroStyling = {};
    let buttonHtml;

    if (buttons) {
        buttonHtml = buttons.map((item, index) => {
            return (
                <Button
                    key={index}
                    href={item.href} 
                    label={item.label} 
                    styleType={item.styleType}
                    onClick={item.onClick}
                />
            )
        });
    }


    if (color) {
        heroStyling = {
            position: 'relative',
            backgroundImage: 'none', 
            backgroundColor: color
        };
    }

    if (backgroundImage) {
        heroStyling = {
            position: 'relative',
            backgroundImage: 'url("'+backgroundImage+'")', 
        };
    }


    return (
        <section className={"hero-container" + (short ? " short" : "")} style={heroStyling}>
            { short && 
                <div className="container-wrap">
                    <Link to="/" className="back">&laquo; Go back</Link>
                </div>
            }

            { hasDivider && <img className="svg-border header-bottom" src="data:image/svg+xml; utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='-1.5 711.65 1443 105.85' width='1443' height='105.85'><path d=' M 0 816 L 0 759 L 709.5 780 L 1440 713.15 L 1440 816 L 889 816 L 551 816 L 0 816 L 0 816 Z ' fill='rgb(255,255,255)' vector-effect='non-scaling-stroke' stroke-width='1' stroke='rgb(255,255,255)' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/></svg>" /> }
            <div className="introduction animate fade-in">
                <h1>{title}</h1>
                { subHeader && <p>{subHeader}</p> }

                { buttonHtml && 
                    <div className="btn-group" role="group" aria-label="Basic example">
                        {buttonHtml}
                    </div>
                }
            </div>
            <div id="arrow"></div>
        </section>
    )
}

export default Header