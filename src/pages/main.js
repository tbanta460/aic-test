import React from 'react';
import { Header, Footer } from '../components';
import './index.css'
import Home  from './home/index.js'
const Main = () => {
    return(
        <>
            <div className="container-ctn-main">
                <header>
                    <Header />
                </header>
                <main>
                    <Home />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Main