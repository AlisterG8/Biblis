import React from 'react'
import NavBar from '../components/NavBar';
import FrontPage from '../components/FrontPage';
import Footer from '../components/Footer';

function HomeView() {
    return (
        <main>
            <NavBar></NavBar>
            <FrontPage></FrontPage>
            <Footer></Footer>
        </main>
    )
}

export default HomeView
