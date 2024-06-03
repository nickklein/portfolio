import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import Header from '../components/Header';
import { work }  from '../../data/work';
import { global }  from '../../data/global';
import OneColumnGrid from '../components/OneColumnGrid';
import Gallery from '../components/Gallery';
import ThreeColumnGrid from '../components/ThreeColumnGrid';
import Footer from '../components/Footer';
import ErrorPage from '../pages/Error';

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

    /**
    * Grab and filter down the related data to it
    * @param related
    *
    **/
    function getRelatedWorks(related?: Array<number>) {
        const filtered = work.filter((item) => {
            if (related && related.includes(item.id)) {
                return true;
            }

            return false;
        });

        return filtered;
    }

    useEffect(() => {
        setCurrentPage(slug);
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <>
            {current ? (
                <>
                
                    <Header 
                        title={current.title}
                        short={true}
                        color={current.color}
                        backgroundImage={current.background_image}
                    />

                    <OneColumnGrid
                        title={current.title}
                        text={current.text}
                        tags={current.tags}
                        links={current.links}
                    />

                    <Gallery 
                        images={current.screenshots} 
                    />

                    { (current.related !== undefined && current.related.length > 0) && ( 
                        <ThreeColumnGrid
                            title={"Other Projects"}
                            items={getRelatedWorks(current.related ?? [])}
                        />
                    )}

                    <Footer links={global.Footer} /> 
                    
                </>
            ) : (
                <ErrorPage />
            )}
        </>
    )
}

export default Work
