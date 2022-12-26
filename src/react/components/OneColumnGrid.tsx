import React from 'react'
import '../../scss/components/onecolumngrid.scss'

interface OneColumnGridProps {
    text: Array<TextType>,
    tags?: Array<string>,
    links?: Array<LinkType>,
}

function OneColumnGrid(props: OneColumnGridProps) {
    const {text, tags, links} = props;
    let tagsHtml;
    let linksHtml;

    const descriptionHtml = text.map((item) => {
        return (
            <>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
            </>
        )
    });

    if (tags) {
        tagsHtml = tags.map((item) => {
            return (
                <span className="tag">{item}</span>
            )
        });
    }

    if (links) {
        linksHtml = links.map((item) => {
            return (
                <a href={item.url} className="btn dark" target="_blank">{item.label}</a>
            )
        });
    }


    return (

        <section className="one-column-txt-container section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-md-12 wpjs slide-left">
                        {descriptionHtml}
                        
                        {linksHtml && 
                            <div className="btn-group" role="group" aria-label="Basic example">
                                {linksHtml}
                            </div>
                        }
                    </div>
                </div>
            </div>

            {tagsHtml &&
                <div className="skills container">
                    <div className="row">
                        <div className="col-xl-12 col-md-12 wpjs slide-left">
                            <p>Technologies used:</p>
                            {tagsHtml}
                        </div>
                    </div>
                </div>
            }
        </section>

    )
}

export default OneColumnGrid