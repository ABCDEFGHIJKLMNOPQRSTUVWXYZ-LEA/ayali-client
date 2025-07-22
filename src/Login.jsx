import { InputText } from 'primereact/inputtext';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import axios from '../src/axiosInstance'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
// import Header from '../Header';

const Login = () => {
    const navigate = useNavigate();

    const [disable, setDisabled] = useState(true);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const massage = useRef(null)

    const fetchfunc = async (e) => {
        e.preventDefault();
        const data1 = {
            userName: userName,
            userPassword: userPassword
        }
        try {
            const { data } = await axios.post("http://localhost:3050/auth/login", data1)
            massage.current.show({ severity: 'success', detail: "You have Logged in successfully!", life: 2000 })
            console.log(data);
            localStorage.setItem('User', data)
            navigate('/');
        } catch (err) {
            if (err.response && err.response.status === 401) {
                console.log("Unauthorized user")
                massage.current.show({ severity: 'error', summary: "Unauthorized user", life: 2000 });
            }
            else {
                massage.current.show({ severity: 'error', summary: "Unauthorized user", detail: "please try again", life: 2000 });
            }

        }
    }
    useEffect(() => {
        if (userName !== "" && userPassword !== "")
            setDisabled(false)
    }, [userName, userPassword])
    useEffect(() => {
        localStorage.removeItem("User")
    }, [])
    return (
        <>
            {/* <Header /> */}
            <div style={{ backgroundColor: "#141F3F", height: "70vh", width: "100vw" }}>
                <div className="flex flex-column justify-content-center align-items-center gap-4 min-h-screen" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"70vh"}}>
                    <div style={{ fontSize: "2rem",color:"white",marginBottom:"20px"}}>Log in</div>
                    <form className="card flex flex-column align-items-center gap-4" style={{width:"30vw",display:"flex",flexDirection:"column",alignItems:"center",gap:"30px",justifyContent:"center"}}onSubmit={(e) => fetchfunc(e)}>
                        <div className="p-inputgroup" style={{width:"70%"}}>
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        {/* password */}
                        <div className='flex flexColumn' style={{display:"flex",flexDirection:"row"}}>
                            <span className="p-inputgroup-addon" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0,width:"2vw"}}>
                                <i className="pi pi-lock"></i>
                            </span>
                            <Password
                                feedback={false}
                                style={{ width: '100%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, }}
                                inputStyle={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                placeholder="Password"
                                onChange={(e) => setUserPassword(e.target.value)}
                                toggleMask
                            />          </div>
                        <Toast ref={massage} position="bottom-center" />
                        <Button type="submit" label="Log in" severity="secondary" disabled={disable} />
                    </form>
                    <video autoPlay muted loop playsInline style={{
                        position: "fixed", bottom: "0", left: "0", width: "100%", height: "30%", overflow: 'hidden', zIndex: "-1", objectFit: 'cover',
                    }}>
                        <source src="/Loginv.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </>
    )
}

export default Login
