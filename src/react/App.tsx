import '../scss/App.scss';
import React, {useRef, useState, ChangeEvent} from 'react';
import Homepage from './pages/Homepage';
import Notes from './pages/Work';
import {
    BrowserRouter,
    Route,
    Link,
    Routes
  } from "react-router-dom";


function App(): JSX.Element {
    return (
        <>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/work/" element={<Notes />} />
                </Routes>
            </BrowserRouter> */}
        </>
    );
}

export default App;
