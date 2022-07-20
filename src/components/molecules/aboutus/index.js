import React from 'react'
import  './index.css';
import { WeAr, WeAre, WeAree, WeA } from '../../../assets';
const AboutUs = () => {
    return(
        <>
         <div className="container-about-us">
            <div className="wrp">
                <img src={WeA} alt="about-us"/>
            </div>
            <div className="chd-about-us">
                <div className="img-about-us">
                    <img alt="about-us" src={WeAr}/>
                    <img alt="about-us" src={WeAre}/>
                    <img alt="about-us" src={WeAree} className="grd-span"/>
                </div>
                <div className="chd-about-us-txt">
                    <h3>Kami Tidak Hanya Sekadar Industri Digital</h3>
                    <ul>
                        <li><span>Menciptakan Hubungan Harmonis Antar Klien Maupun Tim Pekerja.</span></li>
                        <li><span>Meningkatkan Bisnis Anda Untuk Tumbuh Lebih Baik.</span></li>
                        <li><span>Membantu Kebutuhan Bisnis Anda Yang Berhubungan Digital.</span></li>
                        <li><span>Berdiskusi Dengan Kami Untuk Menemukan Peluang Dalam Bisnis Anda.</span></li>
                        <li><span>Merancang Strategi Untuk Pencapaian Di Masa Depan.</span></li>
                    </ul>
                </div>
            </div>
         </div>
        </>
    )
}

export default AboutUs