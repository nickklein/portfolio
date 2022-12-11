import React from 'react'
import '../../../scss/components/atoms/buttons.scss'

interface Style {
    primary: String;
    secondary: String;
}

function Button(props: any) {
    const { href, label, type, target, onClick } = props;

    const style:Style = {
        primary: " btn-primary", // Color black
        secondary: " btn-secondary", // color white
    }

    return (
        <a 
            href={href} 
            className={"btn " + style[type as keyof Style]}
            target={target}
            onClick={onClick}
            >
            { label }
        </a>
    )
}

export default Button