import React from 'react'
import { useRouteError } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

/** TODO: Finish Error page on internal pages */
function Error() {
    const error = useRouteError();
    const gitHubUrl = 'http://github.com/nickklein';

    return (
        <>
            <Header 
                title={"404 - Not Found"}
                subHeader={"There's something wrong here"}
                hasDivider={false}
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

export default Error