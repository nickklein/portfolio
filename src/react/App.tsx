import Header from './components/Header';
import ImageText from './components/ImageText';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
// import Contact from './components/Contact';
import ThreeColumnGrid from './components/ThreeColumnGrid';
import ProfileImage from '../images/profile.jpg';
import '../scss/App.scss';
import React, {useRef} from 'react';

function App(): JSX.Element {
    const gitHubUrl = 'http://github.com/nickklein';
    const scrollToReference = useRef<null | HTMLDivElement>(null);

    function slideToView() {
        scrollToReference.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    return (
        <div>
            <Header 
                title={<div>Hi, I'm <span>Nick</span></div>}
                subHeader="I build web applications"
                buttons={[
                    {
                        label: "View Work",
                        href: "#work",
                        type: "secondary",
                        onClick: slideToView
                    },
                    {
                        label: "View Github",
                        href: gitHubUrl,
                        type: "secondary"
                    }
                ]}
            />

            <ImageText
                title="About"
                image={ProfileImage}
                text="I&#8217;m a Munich-born, Full Stack / Web Developer, currently living in Vancouver, BC. 
                            I have a passion for creating intuitive web applications, and have a huge interest in 3D printing, computer hardware, gaming and Linux."
            />

            <Expertise 
            
            />
            
            <ThreeColumnGrid 
                scrollToReference={scrollToReference} 
            />

            <Footer links={[
                {
                    label: 'Github',
                    icon: 'github',
                    link: gitHubUrl,
                },
                {
                    label: 'LinkedIn',
                    icon: 'linkedin',
                    link: 'https://www.linkedin.com/in/nick-k-1574941b'
                }
            ]} /> 

            {/*
            <Expertise />
            <Contact />
            <Footer /> */}
        </div>
    );
}

export default App;
