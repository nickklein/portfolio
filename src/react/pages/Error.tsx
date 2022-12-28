import React from 'react'
import { useRouteError } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { global }  from '../../data/global';

/** TODO: Finish Error page on internal pages */
function Error() {
    const error = useRouteError();

    return (
        <>
            <Header 
                title={"404 - Not Found"}
                subHeader={"There's something wrong here"}
                hasDivider={false}
            />

            <Footer links={global.Footer} /> 
        </>
    )
}

export default Error