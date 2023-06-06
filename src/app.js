import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
/*
    App layout
    * Header 
        - logo
        - nav list (right)
        - cart
    * Body
        - search bar
        - restaurant cards
            - image
            - food name
            - restaurant name
            - price
            - rating 
            - cuisine
    * Footer
        - links
        - copyright
*/

const AppLayout = () => (
    // <React.Fragment>
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
    // </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);
