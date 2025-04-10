import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import MainBody from "./MainBody"
import '../style.css';


function Page() {
    document.body.style.backgroundColor = 'gray';
    document.body.style.padding = 0;
    return (

        <div className="container">
            <div className="inner-container">
                <Header/>
                <MainBody/>
                <Footer/>
            </div>

        </div>
        
    )
}

export default Page;