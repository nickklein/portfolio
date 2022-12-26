import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import Header from '../components/Header';
import { work }  from '../../data/work';
import OneColumnGrid from '../components/OneColumnGrid';

function Work() {    
    const { slug } = useParams();
    const [current, setCurrent] = useState<CurrentType>();

    /**
     * Fetches the data, and sets the data to it
     * @param slug 
     */
    function setCurrentPage(slug: String|undefined) {
        const filtered = work.filter((item) => {
            if (item.slug === slug) {
                document.title = item.title;
                return true;
            }

            return false;
        });
        setCurrent(filtered[0]);
    }

    useEffect(() => {
        setCurrentPage(slug);
    }, []);

    return (
        <>
            {current && 
                <>
                    <Header 
                        title={current.title}
                        short={true}
                        color={current.color}
                        backgroundImage={current.background_image}
                    />

                    <OneColumnGrid
                        text={current.text}
                        tags={current.tags}
                        links={current.links}
                    />
                </>
            }
        </>
    )
}

export default Work