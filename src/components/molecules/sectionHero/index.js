import React from 'react';
import './index.css';
import { HeroOne, HeroTwo, HeroThree, HeroFour } from '../../../assets';
const SectHero = () => {
    return(
        <div className="chd-ome">
            <div className="wrp-chd">
                <div className="prt-one">
                    <div className="chd-prt-one">
                        <h2>Kita Sudah Membantu Banyak Perusahaan <br/>Untuk Tumbuh Lebih Baik</h2>
                        <div className="wrp-span-txt">
                            <span>Menciptakan sebuah peluang</span>
                            <span>Menerapkannya dan jadikan sebuah kenyataan</span>
                        </div>
                        <button className="btn">Ciptakan Peluang</button>
                    </div>
                </div>
                <div className="prt-two">
                    <div className="chd-prt-two">
                        <div className="wrp-hero-img">
                            <div className="hero-img-prt-one">
                                <div className="wrp-img-one">
                                    <img src={HeroOne} alt="gambar profile perusahaan"/>
                                </div>
                                <div className="wrp-img-two">
                                    <img src={HeroTwo} alt="gambar profile perusahaan"/>
                                </div>
                            </div>
                            <div className="hero-img-prt-two">
                                <div className="wrp-img-three">
                                    <img src={HeroThree} alt="gambar profile perusahaan"/>
                                </div>
                                <div className="wrp-img-four">
                                    <img src={HeroFour} alt="gambar profile perusahaan"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectHero