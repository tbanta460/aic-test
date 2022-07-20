import React from 'react';
import './index.css';
import { FooterMyImmg } from '../../../assets';
const Footer = () => {
    return(
        <>
            <div className="footer-container">
                <img src={FooterMyImmg} alt="footer-image"/>
                <div className="chd-footer">
                    <div className="ql-one">
                        <h4>Quick Links </h4>
                        <ul>
                            <li>Home</li>
                            <li>Tentang Kami</li>
                            <li>Kontak Kami</li>
                            <li>Produk & Layanan Kami</li>
                        </ul>
                    </div>
                    <div className="ql-two">
                    <h4>Quick Links </h4>
                        <div className="wrp-ql-two">
                        <ul>
                            <li>Maintenance Server</li>
                            <li>Membangun Aplikasi</li>
                            <li>Website & Aplikasi Android</li>
                        </ul>
                        <ul>
                            <li>Membangun Sistem Inventori Stok</li>
                            <li>Membangun Sistem Informasi</li>
                            <li>Website & Aplikasi IOS</li>
                        </ul>
                        <ul>
                            <li>Analisis Kinerja Sistem</li>
                            <li>MAktifasi Fitur Payment Gateaway</li>
                            <li>Website CMS WordPress</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer