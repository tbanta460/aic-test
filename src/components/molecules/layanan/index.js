import React, {useState} from 'react';
import './index.css'
const SectLayanan = () => {
    const [shows, setIsShow] = useState({show: false, id:""})
    const listLayanan = [
        {
            name: "Maintenance Server",
            id: "mt",
            desc:["Perawatan Rutin Pada Server", "Perlindungan Serangan Dari Hacker", "Perbaiki Error"]
        },
        {
            name: "Membangun Aplikasi",
            id: "pa",
            desc: ["Android/IOS", "SSD disk space unlimited", "Bandwidth data unlimited", "Jumlah database unlimited", "Cloud hosting 2 VCPU 2 GB RAM"]
        },
        {
            name: "Website & Aplikasi Android",
            id: "pwaa",
            desc:["Sudah termasuk domain", "Bandwidth data unlimited", "SSD disk space unlimited", "Cloud hosting 2 VCPU 2 GB RAM", "Termasuk Membuat Website E-Commerce", "Aplikasi (Android)"]
        },
        {
            name: "Website & Aplikasi IOS",
            id: "pwai",
            desc:["Sudah termasuk domain", "Bandwidth data unlimited", "SSD disk space unlimited", "Cloud hosting 2 VCPU 2 GB RAM", "Termasuk Membuat Website E-Commerce", "Aplikasi (IOS)"]
        },
        {
            name: "Membangun Sistem Informasi",
            id: "psi",
            desc: ["Login 3 Akses (Termasuk Admin)", "Dashboard Admin", "Pendaftaran Baru User/Client", "Laporan Data (Bisa Request)", "Profile User/Client"]
        },
        {
            name: "Membangun Sistem Inventori Stok",
            id: "psisb",
            desc: ["Support Barcode/Scanner", "Laporan Harian", "Laporan Bulanan", "Laporan Mingguan", "Manajemeng Stok Barang", "Laporan Laba & Rugi", "Return Barang", "Print Nota, Print Barcode, Print Label", "Bisa Request"]
        },
        {
            name: "Analisis Kinerja Sistem",
            id: "aks",
            desc: ["Analisis Performa Website", "Analisis SEO", "Analisis Kecepatan Website"]
        },
        {
            name: "Aktifasi Fitur Payment Gateaway",
            id: "afpg",
            desc: ["Mengaktifkan Fitur Payment Gateaway", "Payment Gateaway Midtrans", "Payment Gateaway Ipaymu", "Payment Gateaway Xendit", "Bisa Request"]
        },
        {
            name: "Website CMS WordPress",
            id: "pwcw",
            desc: ["Gratis Plugin Premium (Max:5 Plugin)", "Gratis Theme Premium", "Woocomerce", "Termasuk Domain", "Bisa Request"]
        }
    ]
    const handleEvent = (e) => {
        let getDesc = Array.from(e.currentTarget.children)[1]
        if(getDesc.classList.contains('hide-detail') ){
            getDesc.classList.toggle('hide-detail');
            getDesc.classList.toggle('show-detail')
        }else{
            getDesc.classList.toggle('hide-detail');
            getDesc.classList.toggle('show-detail')
        }
        
    }
    return(
        <>
            <div className="container-layanan">
                <h3>Produk & Layanan Kami</h3>
                <div className="chd-layanan">
                    <ul>
                        <li onClick={handleEvent}id={listLayanan[0].id} className="list-rpoduk">
                            <span>{listLayanan[0].name}</span>
                            <ul className="list-jasa-kami hide-detail">
                                {listLayanan[0].desc.map((data, i)=>{
                                    return(
                                        <li key={i}>{data}</li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li onClick={handleEvent}id={listLayanan[1].id}  className="list-rpoduk">
                            <span>{listLayanan[1].name}</span>
                            <ul className="list-jasa-kami hide-detail">
                                {listLayanan[1].desc.map((data, i)=>{
                                    return(
                                        <li key={i}>{data}</li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li onClick={handleEvent}id={listLayanan[2].id}  className="list-rpoduk">
                            <span>{listLayanan[2].name}</span>
                            <ul className="list-jasa-kami hide-detail">
                                {listLayanan[2].desc.map((data, i)=>{
                                    return(
                                        <li key={i}>{data}</li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li onClick={handleEvent}id={listLayanan[3].id}  className="list-rpoduk">
                            <span>{listLayanan[3].name}</span>
                            <ul className="list-jasa-kami hide-detail">
                                {listLayanan[3].desc.map((data, i)=>{
                                    return(
                                        <li key={i}>{data}</li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li onClick={handleEvent}id={listLayanan[4].id}  className="list-rpoduk">
                            <span>{listLayanan[4].name}</span>
                            <ul className="list-jasa-kami hide-detail">
                                {listLayanan[4].desc.map((data, i)=>{
                                    return(
                                        <li key={i}>{data}</li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li onClick={handleEvent}id={listLayanan[5].id}  className="list-rpoduk">
                            <span>{listLayanan[5].name}</span>
                            <ul className="list-jasa-kami hide-detail">
                                {listLayanan[5].desc.map((data, i)=>{
                                    return(
                                        <li key={i}>{data}</li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li onClick={handleEvent}id={listLayanan[6].id}  className="list-rpoduk">
                            <span>{listLayanan[6].name}</span>
                            <ul className="list-jasa-kami hide-detail">
                                {listLayanan[6].desc.map((data, i)=>{
                                    return(
                                        <li key={i}>{data}</li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li onClick={handleEvent}id={listLayanan[7].id}  className="list-rpoduk">
                            <span>{listLayanan[7].name}</span>
                            <ul className="list-jasa-kami hide-detail">
                                {listLayanan[7].desc.map((data, i)=>{
                                    return(
                                        <li key={i}>{data}</li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li onClick={handleEvent}id={listLayanan[8].id}  className="list-rpoduk">
                            <span>{listLayanan[8].name}</span>
                            <ul className="list-jasa-kami hide-detail">
                                {listLayanan[8].desc.map((data, i)=>{
                                    return(
                                        <li key={i}>{data}</li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SectLayanan