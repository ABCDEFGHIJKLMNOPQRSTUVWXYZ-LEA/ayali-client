import { InputText } from 'primereact/inputtext'
import React from 'react'
import { useState } from 'react'
import axios from '../src/axiosInstance'
import { Toast } from 'primereact/toast';
import { useRef,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css';

const Home = () => {
    const navigate = useNavigate();

    const [phone, setPhone] = useState();
    const massage = useRef(null)
    const sendFind = async () => {
        if (!phone)
            return massage.current.show({ severity: 'error', detail: "please fill the number!", life: 2000 })
        try {
            const { data } = await axios.get(`/clients/${phone}`)
            if (data)
                navigate(`/clients/${phone}`);
        }
        catch (error) {
            if (error.response && error.response.status === 401 && localStorage.getItem('User') == null) {
                massage.current.show({ severity: 'error', detail: "Log in first!", life: 2000 })
                setTimeout(() => {
                    navigate('/auth/login')
                }, 3000);
            }
            else {
                await axios.post(`/clients/`, { phone })
                navigate(`/clients/${phone}`);
            }
        }
    }
    useEffect(() => {
if(!localStorage.getItem('User'))
    navigate('/auth/login')
    }, []);
    return (
        <div>
            <div style={{ backgroundColor: "#141F3F", height: "50vh", width: "100vw" }}>
                <div className="flex flex-column justify-content-center align-items-center gap-4 min-h-screen" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "70vh" }}>
                    <h4 style={{ color: "white", fontFamily: "serif", fontSize: "28px" }}>:מספר מזהה</h4>
                    {/* <Link to={'/auth/login'} style={{color:"white"}}><i className="pi pi-user"></i></Link> */}

                    <div style={{ height: "15vh", width: "100vw", display: 'flex', alignItems: "center", justifyContent: "center" }}>

                        <div className="p-inputgroup" style={{ width: "30%" }}>
                            <InputText placeholder="Client Phone" onChange={(e) => setPhone(e.target.value)} style={{ borderTopRightRadius: "0", borderBottomRightRadius: "0" }} />
                            <span onClick={sendFind} className="p-inputgroup-addon">
                                <i className="pi pi-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                    <Toast ref={massage} position="bottom-center" />

                    <video autoPlay muted loop playsInline style={{
                        position: "fixed", bottom: "0", left: "0", width: "100%", height: "50%", overflow: 'hidden', zIndex: "-1", objectFit: 'cover',
                    }}>
                        <source src="/V2.WEBM" type="video/WEBM"></source>
                    </video>
                </div>
            </div>
        </div>

    )
}

export default Home
