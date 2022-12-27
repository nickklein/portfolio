import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import Header from '../components/Header';
import { work }  from '../../data/work';
import OneColumnGrid from '../components/OneColumnGrid';
import Gallery from '../components/Gallery';
import ThreeColumnGrid from '../components/ThreeColumnGrid';
import Footer from '../components/Footer';
import ErrorPage from '../pages/Error';

function Work() {    
    const { slug } = useParams();
    const [current, setCurrent] = useState<CurrentType>();
    const gitHubUrl = 'http://github.com/nickklein';


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
            {current ? (
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

                    <Gallery 
                        images={current.screenshots} 
                    />

                    <ThreeColumnGrid
                        title={"Other Projects"}
                        items={[work[0], work[1], work[2]]}
                    />

                    <Footer links={[
                        {
                            icon: 'github',
                            link: gitHubUrl,
                        },
                        {
                            icon: 'linkedin',
                            link: 'https://www.linkedin.com/in/nick-k-1574941b'
                        }
                    ]} /> 
                    
                </>
            ) : (
                <ErrorPage />
            )}
        </>
    )
}

export default Work