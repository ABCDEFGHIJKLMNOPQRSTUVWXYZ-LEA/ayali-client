import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { SelectButton } from 'primereact/selectbutton';
import { InputTextarea } from "primereact/inputtextarea";
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';
import { FloatLabel } from 'primereact/floatlabel';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
// import { ProductService } from './service/ProductService';
import axios from '../src/axiosInstance'
import { Link, useParams } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { HDate, HebrewCalendar } from '@hebcal/core';
import './App.css';
const Client = () => {
    const navigate = useNavigate()
    const rowClassName = (rowData) => {
        if (rowData.by === 'אילי') {
            return 'rowili';
        } else if (rowData.by === 'רבקה') {
            return 'rowrivka';
        }
        return ''; // ברירת מחדל – בלי שינוי
    };
    //////////////
    const massage = useRef('')
    const [phone3, setPhone] = useState('');                         // מספר הטלפון
    const [phone2, setPhone2] = useState([]);                       // מספרים נוספים
    const [name, setName] = useState('');                           // שם
    const [email, setEmail] = useState('');                         // כתובת מייל (email.address)
    const [emailAvailable, setEmailAvailable] = useState(false);   // זמינה במייל (email.available)
    const [healthFund, setHealthFund] = useState('');              // קופת חולים
    const [city, setCity] = useState('');                           // עיר מגורים
    const [insurance, setInsurance] = useState(false);             // ביטוח משלים
    const [childrenCount, setChildrenCount] = useState();          // מספר ילדים
    const [obstetricHistory, setObstetricHistory] = useState('');  // היסטוריה מיילדותית
    const [cesareans, setCesareans] = useState();                  // מספר קיסרי
    const [weight, setWeight] = useState();                         // משקל
    const [height, setHeight] = useState();                         // גובה
    const [Cruises, setCruises] = useState();                       // הפלגות
    const [bleedingDays, setBleedingDays] = useState();            // מספר ימי דימום
    const [heavyBleeding, setHeavyBleeding] = useState(false);     // דימום חלש או חזק במיוחד
    const [Currently_breastfeeding, setCurrently_breastfeeding] = useState(false); // הנקה כרגע
    const [Regular_medications, setRegular_medications] = useState(''); // תרופות קבועות
    const [Attending_physician, setAttending_physician] = useState(''); // רופא מטפל
    const [Underlying_diseases, setUnderlying_diseases] = useState(''); // מחלות רקע
    const [Our_comments, setOur_comments] = useState('');          // הערות שלנו
    //////////////////////////////////////////////////////////////
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const hdate = new HDate(new Date());
    const [date, setDate] = useState(hdate.renderGematriya());
    const options = ['רבקה', 'אילי'];
    const [by, setBy] = useState(options[0]);
    const [des, setDes] = useState('');
    const { phone } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getClientDocuments()
    }, []);
    const goSearch = async () => {
        const { data } = await axios.get(`http://localhost:3050/clients/${phone}`);
        console.log("data:", data.email);
        if (!data.email)
            massage.current.show({ severity: 'error', detail: "Put Email First", life: 2000 })
        else {
            const email = typeof data.email.address === 'string' ? data.email.address.split("@")[0] : null;
            if (!email) {
                console.error("שדה email לא קיים או לא תקין", data.email.address);
                return;
            }

            window.open(`https://mail.google.com/mail/u/1/#search/${email}%40gmail.com`);
        }
    }
    const getClientDocuments = async () => {
        const { data } = await axios.get(`http://localhost:3050/clients/${phone}`)
        console.log(data);
        setPhone(data.phone || '');
        setPhone2(data.phone2 || []);
        setName(data.name || '');
        setEmail(data.email?.address || '');
        setEmailAvailable(data.email?.available || false);
        setHealthFund(data.healthFund || '');
        setCity(data.city || '');
        setInsurance(data.insurance || false);
        setChildrenCount(data.childrenCount || '');
        setObstetricHistory(data.obstetricHistory || '');
        setCesareans(data.cesareans || '');
        setWeight(data.weight || '');
        setHeight(data.height || '');
        setCruises(data.Cruises || '');
        setBleedingDays(data.bleedingDays || '');
        setHeavyBleeding(data.heavyBleeding || false);
        setCurrently_breastfeeding(data.Currently_breastfeeding || false);
        setRegular_medications(data.Regular_medications || '');
        setAttending_physician(data.Attending_physician || '');
        setUnderlying_diseases(data.Underlying_diseases || '');
        setOur_comments(data.Our_comments || '');
        if (data.documents)
            setProducts(data.documents.slice().reverse())
    }
    const addDocument = async () => {
        const documentData = {
            date: date,
            by: by,
            des: des
        };

        try {
            const { data } = await axios.post(`http://localhost:3050/clients/${phone}/document`, documentData);
            console.log("Document added:", data);

        } catch (err) {
            return console.error("Error adding document:", err.response?.data || err.message);
        }
        setVisible(false)
        getClientDocuments()
    }
    const gotoPersonal = () => {
        navigate('/clients/:phone/per');

    }
    const updateClient = async () => {
        const clientData = {
            phone: phone3,
            phone2,
            name,
            email: {
                address: email,
                available: emailAvailable
            },
            healthFund,
            city,
            insurance,
            childrenCount,
            obstetricHistory,
            cesareans,
            weight,
            height,
            Cruises,
            bleedingDays,
            heavyBleeding,
            Currently_breastfeeding,
            Regular_medications,
            Attending_physician,
            Underlying_diseases,
            Our_comments
        };

        try {
            const { data } = await axios.put(`http://localhost:3050/clients/${phone}`, clientData);
            if (!data) {
                console.log("לא הצליח לשמור");
            } else {
                console.log("שמר בהצלחה", data);
            }
        } catch (error) {
            console.error("שגיאה בעדכון הלקוח:", error.response?.data || error.message);
        }
        setVisible2(false)
    };
    const goHome = () => {
        navigate('/');
    }
    const goReasons = () => {
        navigate(`/clients/${phone}/per`);
    }
    return (
        <div style={{ backgroundColor: "white", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h2>מספר פלאפון: {phone}</h2>
            <Button style={{ backgroundColor: "#141F3F" }} onClick={() => setVisible(true)}>עדכון חדש </Button>
            <div className="card">
                <DataTable value={products} tableStyle={{ width: "100vw" }} rowClassName={rowClassName}
                >
                    <Column field="date" header="תאריך" style={{ width: "16.3vw" }}></Column>
                    <Column field="by" header="על ידי" style={{ width: "16.2vw" }}></Column>
                    <Column field="des" header="פירוט" style={{ width: "16.2vw" }}></Column>
                </DataTable>
            </div>
            <Dialog header="הוספת עדכון" visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}>
                <div style={{ width: '50vw', display: "flex", flexDirection: "column", gap: "25px", alignItems: "center", justifyContent: "center" }}>
                    <InputText value={date} readOnly />
                    <SelectButton value={by} onChange={(e) => setBy(e.value)} options={options} />
                    <InputTextarea onChange={(e) => setDes(e.target.value)} rows={5} cols={30} />
                    <Button style={{ backgroundColor: "#141F3F" }} onClick={addDocument}>הוסף</Button>
                </div>
            </Dialog>
            <Dialog
                header="טופס פרטי לקוח"
                visible={visible2}
                style={{ width: '70vw' }}
                onHide={() => setVisible2(false)}
                modal
            >
                <div className="p-fluid grid" style={{ display: "flex", flexDirection: "column", gap: "15px"}}>
                    <div style={{ display: "flex", flexDirection: "row", marginTop: "35px",justifyContent:"space-evenly"}}>
                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="phone" value={phone3} onChange={e => setPhone(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="phone">מספר פלאפון</label>
                            </FloatLabel>
                        </div>

                        <div className="col-6">
                            <FloatLabel style={{width:"20vw"}}>
                                <InputText id="phone2" value={phone2.join(',')} onChange={e => setPhone2(e.target.value.split(','))} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="phone2">מספרים נוספים (מופרדים בפסיקים)</label>
                            </FloatLabel>
                        </div>
                                            <div className="col-6">
                        <FloatLabel>
                            <InputText id="name" value={name} onChange={e => setName(e.target.value)} />
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="name">שם</label>
                        </FloatLabel>
                    </div>
                                        <div className="col-6">
                        <FloatLabel>
                            <InputText id="email" value={email} onChange={e => setEmail(e.target.value)} />
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="email">כתובת מייל</label>
                        </FloatLabel>
                    </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", gap: "15px" }}>

                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="healthFund" value={healthFund} onChange={e => setHealthFund(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="healthFund">קופת חולים</label>
                            </FloatLabel>
                        </div>
                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="Attending_physician" value={Attending_physician} onChange={e => setAttending_physician(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="Attending_physician">רופא מטפל</label>
                            </FloatLabel>
                        </div>
                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="city" value={city} onChange={e => setCity(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="city">עיר מגורים</label>
                            </FloatLabel>
                        </div>
                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="childrenCount" value={childrenCount} onChange={e => setChildrenCount(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="childrenCount">מספר ילדים</label>
                            </FloatLabel>
                        </div>



                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="cesareans" value={cesareans} onChange={e => setCesareans(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="cesareans">מספר קיסרי</label>
                            </FloatLabel>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="weight" value={weight} onChange={e => setWeight(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="weight">משקל</label>
                            </FloatLabel>
                        </div>

                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="height" value={height} onChange={e => setHeight(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="height">גובה</label>
                            </FloatLabel>
                        </div>

                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="Cruises" value={Cruises} onChange={e => setCruises(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="Cruises">הפלגות</label>
                            </FloatLabel>
                        </div>

                        <div className="col-6">
                            <FloatLabel>
                                <InputText id="bleedingDays" value={bleedingDays} onChange={e => setBleedingDays(e.target.value)} />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="bleedingDays">מספר ימי דימום</label>
                            </FloatLabel>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <div className="col-6 flex align-items-center gap-2" style={{ marginTop: '1.5rem', display: "flex", flexDirection: "row", gap: "15px", color: "blue", fontWeight: "bold", fontSize: "20px" }}>
                            דימום חזק במיוחד
                            <Checkbox checked={heavyBleeding} onChange={e => setHeavyBleeding(e.checked)} />
                        </div>
                        <div className="col-6 flex align-items-center gap-2" style={{ marginTop: '1.5rem', display: "flex", flexDirection: "row", gap: "15px", color: "blue", fontWeight: "bold", fontSize: "20px" }}>
                            זמינה במייל
                            <Checkbox checked={emailAvailable} onChange={e => setEmailAvailable(e.checked)} />
                        </div>
                        <div className="col-6 flex align-items-center gap-2" style={{ marginTop: '1.5rem', display: "flex", flexDirection: "row", gap: "15px", color: "blue", fontWeight: "bold", fontSize: "20px" }}>
                            ביטוח משלים
                            <Checkbox checked={insurance} onChange={e => setInsurance(e.checked)} />
                        </div>
                        <div className="col-6 flex align-items-center gap-2" style={{ marginTop: '1.5rem', display: "flex", flexDirection: "row", gap: "15px", color: "blue", fontWeight: "bold", fontSize: "20px" }}>
                            הנקה כרגע
                            <Checkbox checked={Currently_breastfeeding} onChange={e => setCurrently_breastfeeding(e.checked)} />
                        </div>
                    </div>
                                        <div style={{ display: "flex", flexDirection: "row", marginTop: "35px",justifyContent:"space-evenly"}}>

                    <div className="col-12" style={{width:"35vw"}}>
                        <FloatLabel>
                            <InputTextarea id="Regular_medications" value={Regular_medications} onChange={e => setRegular_medications(e.target.value)} rows={3} />
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="Regular_medications">תרופות קבועות</label>
                        </FloatLabel>
                    </div>

                    <div className="col-12" style={{width:"35vw"}}>
                        <FloatLabel>
                            <InputTextarea id="Underlying_diseases" value={Underlying_diseases} onChange={e => setUnderlying_diseases(e.target.value)} rows={3} />
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="Underlying_diseases">מחלות רקע</label>
                        </FloatLabel>
                    </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", marginTop: "35px",justifyContent:"space-evenly"}}>

                    <div className="col-12" style={{width:"35vw"}}>
                        <FloatLabel>
                            <InputTextarea id="obstetricHistory" value={obstetricHistory} onChange={e => setObstetricHistory(e.target.value)} rows={3} />
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="obstetricHistory">היסטוריה מיילדותית</label>
                        </FloatLabel>
                    </div>
                    <div className="col-12" style={{width:"35vw"}}>
                        <FloatLabel>
                            <InputTextarea id="Our_comments" value={Our_comments} onChange={e => setOur_comments(e.target.value)} rows={3} />
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="Our_comments">הערות שלנו</label>
                        </FloatLabel>
                    </div>
                    </div>
                </div>

                <div className="flex justify-content-end mt-3 gap-2">
                    <Button style={{ backgroundColor: "#141F3F" }} onClick={updateClient} label="שמור" />
                </div>
            </Dialog>
            <div style={{ backgroundColor: "white", width: "100vw", marginTop: "30px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "25px" }}>
                <Button style={{ backgroundColor: "#141F3F" }} onClick={() => setVisible2(true)}>פרטים אישיים</Button>
                <Button style={{ backgroundColor: "#141F3F" }} onClick={goReasons}>סיבת הפנייה</Button>
                <Button style={{ backgroundColor: "#141F3F" }} onClick={goSearch}>מסמכים רפואיים</Button>
                <Button style={{ backgroundColor: "#141F3F" }} onClick={goHome}>
                    <i className="pi pi-shop"></i>
                </Button>
            </div>
            <video autoPlay muted loop playsInline style={{
                position: "fixed", bottom: "0", left: "0", width: "100%", height: "50%", overflow: 'hidden', zIndex: "-1", objectFit: 'cover',
            }}>
                <source src="/V2.WEBM" type="video/WEBM"></source>
            </video>
            <Toast ref={massage} position="bottom-center" />
        </div>
    )
}
export default Client
