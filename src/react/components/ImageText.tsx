import React from 'react'
import '../../scss/components/imagetext.scss'

interface Props {
    title?: string,
    image: {
        url: string,
        alt: string,
    },
    text: string
}

function ImageText(props: Props) {
    const {title, image, text} = props;

    return (
        <section className="img-txt-container section-container">
            {title && <h2 className="animate fade-in-quick">{title}</h2> }
            <div className="container">
                <div className="row">
                    {image && 
                        <div className="image">
                            <img src={image.url} alt={image.alt} />
                        </div>
                    }
                    {text && 
                        <div className="introduction">
                            <p>{text}</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default ImageText