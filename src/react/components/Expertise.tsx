import React from 'react'
import '../../scss/components/expertise.scss'

interface ExpertiseProps {
    title: string;
    items: {
        image: any;
        title: string;
        description: string;
    }[];
}
function Expertise(props: ExpertiseProps): JSX.Element  {
    const { title, items } = props;
    let itemsHtml;
    
    if (items) {
        itemsHtml = items.map((item) => {
            return (
                <li className="exp-item row">
                    <span className="icons">
                        <img src={item.image} alt={item.title} />
                        
                    </span>

                    <div className="info">
                        <h3>{item.title}</h3>
                        {item.description}
                    </div>
                </li>     
            )
        });
    }


    return (
        <section className="expertise section-container">
            <div className="introduction">
                <h2 className="featured">{title}</h2>
            </div>
            <div className="container">
                <ul className="exp-container">
                    {itemsHtml}
                </ul>
            </div>
        </section>

    )
}

export default Expertise