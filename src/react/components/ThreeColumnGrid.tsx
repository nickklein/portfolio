import React, { useState } from 'react'
import '../../scss/components/threecolumngrid.scss'
import Button from './atoms/Button'
import GridItem from './atoms/GridItem';

interface Props {
    title: string,
    filterButtons?: Array<string>,
    items: Array<CurrentType>,
    scrollToReference?: any,
}

function ThreeColumnGrid(props: Props) {
    const { title, items, filterButtons, scrollToReference } = props;
    const [ stateItems, setStateItems] = useState(items);
    let buttonHtml;

    /**
     * Filter Grid items
     * @param category 
     */
    function filterItems(category: string) {
        setStateItems((prevStateItems) => {
            return prevStateItems.map((item) => {
                if (item.category === category || category === 'All') {
                    return {
                        ...item,
                        show: true,
                    }
                }
    
                return {
                    ...item,
                    show: false,
                }
            });
        });
    }

    
    /**
     * Create JSX Items for grid items
     */
    if (filterButtons) {
        buttonHtml = filterButtons.map((item) => {
            return (
                <Button 
                    isButton={true} 
                    label={item} 
                    onClick={() => filterItems(item)} 
                />
            );
        });
    }


    /**
     * Create JSX Items for grid items
     */
    const gridItemsHtml = stateItems.map((item) => {
            return ( 
                <GridItem
                    show={item.show}
                    title={item.shortened_title}
                    color={item.color}
                    thumbnail={item.thumbnail}
                    logo={item.logo}
                    url={"work/"+item.slug+"/"}
                />
            )
    });

    return (
        <section className="three-col-grid section-container" ref={scrollToReference}>
            <h2>{title}</h2>

            { buttonHtml && 
                <div className="filter">
                    <div className="btn-group filter-button-group">
                        {buttonHtml}
                    </div>
                </div>
            }
                
            <div className="container-wrap">
                <div className="grid">
                    {gridItemsHtml}
                </div>
            </div>
        </section>
    )
}

export default ThreeColumnGrid