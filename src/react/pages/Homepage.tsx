import Header from '../components/Header';
import ImageText from '../components/ImageText';
import Expertise from '../components/Expertise';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ThreeColumnGrid from '../components/ThreeColumnGrid';
import '../../scss/App.scss';
import React, {useRef, useEffect} from 'react';
import { homepage }  from '../../data/homepage';
import { work }  from '../../data/work';
import { global }  from '../../data/global';


/** TODO: Fetch some of this data from a data set */
function Homepage(props: {title: string}) {
    const {title} = props;
    const scrollToReference = useRef<null | HTMLDivElement>(null);
    
    /**
     * Slide to view
     * @param event
     * @return void
     */
    function slideToView(event: React.MouseEvent<Element, MouseEvent>): void {
        event.preventDefault();
        scrollToReference.current?.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        document.title = props.title || "";
    }, [title]);    

    return (
        <>
            <Header 
                title={homepage.Header.title}
                subHeader={homepage.Header.subHeader}
                buttons={[
                    {
                        label: "View Work",
                        href: "#work",
                        styleType: "secondary",
                        onClick: (event) => slideToView(event)
                    },
                    {
                        label: "View Github",
                        href: global.Links.gitub,
                        styleType: "secondary"
                    }
                ]}
            />

            <ImageText
                title={homepage.ImageText.title}
                image={homepage.ImageText.image}
                text={homepage.ImageText.description}
            />

            <Expertise 
                title={homepage.Expertise.title}
                items={homepage.Expertise.items}
            />
            

            <ThreeColumnGrid
                title={homepage.ThreeColumnGrid.title}
                filterButtons={homepage.ThreeColumnGrid.filterButtons}
                items={work}
                scrollToReference={scrollToReference} 
            />

            <Contact
                title={homepage.Contact.title}
            />

            <Footer links={global.Footer} /> 
        </>
    )
}

export default Homepage