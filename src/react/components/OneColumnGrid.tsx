import React from 'react'
import '../../scss/components/onecolumngrid.scss'

interface OneColumnGridProps {
    title: string,
    text: Array<TextType>,
    tags?: Array<string>,
    links?: Array<LinkType>,
}

function OneColumnGrid(props: OneColumnGridProps) {
    const {title, text, tags, links} = props;
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

    if (links) {
        linksHtml = links.map((item) => {
            return (
                <a href={item.url} className="btn dark" target="_blank">{item.label}</a>
            )
        });
    }

    if (tags) {
        tagsHtml = tags.map((item) => {
            return (
                <span className="tag">{item}</span>
            )
        });
    }


    return (

        <section className="one-column-txt-container section-container">
            <div className="container">
                <div className="row">
                    <div className="slide-left">
                        <h2>{title}</h2>
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
                        <div className="slide-left">
                            <p>Technologies used:</p>
                            <span className="tags-container">
                                {tagsHtml}
                            </span>
                        </div>
                    </div>
                </div>
            }
        </section>

    )
}

export default OneColumnGrid