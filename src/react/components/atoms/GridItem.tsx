import React from 'react'

interface GridItemsProp {
    show: boolean,
    title: string,
    url: string,
    logo?: string,
    thumbnail?: string,
    color?: string,
}

function GridItem(props: GridItemsProp) {
    const {show, title, url, logo, thumbnail, color} = props;
    let styleProp;
    console.log(thumbnail);

    // Define background color if it exists.
    // Usually for when I don't have a background image for it
    if (color) {
        styleProp = {
            backgroundColor: color
        }
    }
    

    return (
        <>
            {show && 
                <div className="col-item wpjs slide-bottom animate">
                    <a href={url} className="grid-item">
                        <div className={"grid-image" + (color ? " color" : "")} style={styleProp}>
                            { thumbnail && <img className="rounded" src={thumbnail} /> }
                        </div>

                        <div className="grid-info text">
                            { logo 
                                ?  
                                <img src={logo} alt={title} /> 
                                : 
                                <h3>{title}</h3> 
                            }
                        </div>
                    </a>
                </div>
            }
        </>
    )
}

export default GridItem