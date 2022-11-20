import React from 'react'

function Button(props) {
    const { href, label, type, target } = props;

    const style = {
        primary: "border-black text-black", // Color black
        secondary: "border-white text-white", // color white
    }

    return (
        <a 
            href={href} 
            className={"text-center block border-2 py-3 px-12 uppercase font-bold " + style[type]}
            target={target}>
            { label }
        </a>
    )
}

export default Button