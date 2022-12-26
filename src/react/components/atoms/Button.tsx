import React from 'react'
import '../../../scss/components/atoms/buttons.scss'

Button.defaultProps = {
    isButton: false,
}

function Button(props: ButtonTypes): JSX.Element {
    let buttonHtml;
    const { isButton, label, href, styleType, target, onClick } = props;

    const style:Style = {
        primary: " btn-primary", // Color black
        secondary: " btn-secondary", // color white
    }

    if (!isButton) {
        buttonHtml = <a 
                href={href} 
                className={"btn " + style[styleType as keyof Style]}
                target={target}
                onClick={onClick}>
                { label }
            </a>;
    } else {
        buttonHtml = <button 
                type="button" 
                className={"btn " + style[styleType as keyof Style]}
                onClick={onClick}>
                { label }
            </button>;
    }

    return (
        <>
            {buttonHtml}
        </>
    )
}

export default Button