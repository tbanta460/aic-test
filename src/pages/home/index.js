import React from 'react';
import './index.css'
import { SectHero, SectLayanan, AboutUs, ContactUs, Teams } from '../../components';
const Home = () => {
    return(
        <>
            <div className="container-home">
                <section className="sect-hero">
                    <SectHero />
                </section>
                <section className="sect-layanan">
                    <SectLayanan />
                </section>
                <section>
                    <AboutUs />
                </section>
                <section>
                    <ContactUs />
                </section>
                <section>
                    <Teams />
                </section>
            </div>
        </>
    )
}

export default Home