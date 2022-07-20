import React from 'react';
import './index.css';
import { TransImage } from '../../../assets';
const ContactUs = () => {
    return(
        <>
            <div className="container-contact-us">
                <div className="chd-contact-us">
                    <img src={TransImage} alt="contact-us"/>
                    <div className="cta">
                        <h3 className="cta-txt">Masalah Yang Anda Alamami Di Dunia Digital Kami Solusinya.</h3>
                        <p>Jika Anda mengalami masalah dalam dunia digital, kami dengan cepat membantu anda untuk memecahkan solusinya. Jika Anda membutuhkan konsultasi dalam dunia digital maka kami solusi yang tepat.</p>
                        <div className="chd-cta">
                            <button className="btn btn-fb">Facebook</button>
                            <button className="btn btn-wa">WhatsApp</button>
                            <button className="btn btn-tt">Twitter</button>
                            <button className="btn btn-ig">Instagram</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs