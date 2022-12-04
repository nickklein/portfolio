import React from 'react'

function ImageText(props) {
    const {url, description} = props;

    return (
        <section className="img-txt-container section-container">
            <h2 className="animate fade-in-quick">About</h2>
            <div className="container">
                <div className="row">
                    {url && 
                        <div className="image">
                            <img src={url} alt="nick klein" />
                        </div>
                    }
                    {description && 
                        <div className="introduction">
                            <p>{description}</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default ImageText