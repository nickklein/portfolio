import Header from '../components/Header';
import ImageText from '../components/ImageText';
import Expertise from '../components/Expertise';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ThreeColumnGrid from '../components/ThreeColumnGrid';
import ProfileImage from '../../images/profile.jpg';
import '../../scss/App.scss';
import React, {useRef, useEffect} from 'react';
import { work }  from '../../data/work';
import { useLocation } from "react-router-dom";

/** TODO: Fetch some of this data from a data set */
function Homepage(props: {title: string}) {
    const {title} = props;
    const gitHubUrl = 'http://github.com/nickklein';
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
                title={<div>Hi, I'm <span>Nick</span></div>}
                subHeader="I build web applications"
                buttons={[
                    {
                        label: "View Work",
                        href: "#work",
                        styleType: "secondary",
                        onClick: (event) => slideToView(event)
                    },
                    {
                        label: "View Github",
                        href: gitHubUrl,
                        styleType: "secondary"
                    }
                ]}
            />

            <ImageText
                title="About"
                image={
                    {
                        url: ProfileImage,
                        alt: 'nick klein',
                    }
                }
                text="I&#8217;m a Munich-born, Full Stack / Web Developer, currently living in Vancouver, BC. 
                            I have a passion for creating intuitive web applications, and have a huge interest in 3D printing, computer hardware, gaming and Linux."
            />

            <Expertise 
                title="Expertise"
            />
            

            <ThreeColumnGrid
                title={"Work"}
                filterButtons={['All', 'Hardware', 'Laravel', 'Python', 'Wordpress']}
                items={work}
                scrollToReference={scrollToReference} 
            />

            <Contact
                title={"Contact"}
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
    )
}

export default Homepage