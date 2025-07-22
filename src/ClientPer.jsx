
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from '../src/axiosInstance'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';

const ClientPer = () => {
    const navigate = useNavigate();
    const { phone } = useParams();
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible6, setVisible6] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [visible7, setVisible7] = useState(false);
    const [PolycysticOvaries, setPolycysticOvaries] = useState(false);
    const [LowOvarianReserve, setLowOvarianReserve] = useState(false);
    const [MaleFertility, setMaleFertility] = useState(false);
    const [NoFertility, setNoFertility] = useState(false);
    const [RecurringMiscarriages, setRecurringMiscarriages] = useState(false);
    const [PregnancyBleeding, setPregnancyBleeding] = useState(false);
    const [Contractions, setContractions] = useState(false);
    const [HighRiskPregnancy, setHighRiskPregnancy] = useState(false);
    const [GestationalDiabetes, setGestationalDiabetes] = useState(false);
    const [Prevention, setPrevention] = useState(false);
    const [NursingBleeding, setNursingBleeding] = useState(false);
    const [OtherReason, setOtherReason] = useState(false);
    const [OtherReasonText, setOtherReasonText] = useState('');
    const [LH_before_dieting, setLH_before_dieting] = useState('');
    const [FSH_before_dieting, setFSH_before_dieting] = useState('');
    const [LH_after_dieting, setLH_after_dieting] = useState('');
    const [FSH_after_dieting, setFSH_after_dieting] = useState('');
    const [Androgens, setAndrogens] = useState(false);
    const [AFC, setAFC] = useState(null);
    const [Diet_start_date, setDiet_start_date] = useState('');
    const [Medicines_and_vitamins, setMedicines_and_vitamins] = useState('');
    const [Cruises, setCruises] = useState('');
    const [Intermenstrual_bleeding, setIntermenstrual_bleeding] = useState(false);
    const [Normal_weight, setNormal_weight] = useState(null);
    const [FSH, setFSH] = useState('');
    const [AMH, setAMH] = useState('');
    const [age, setAge] = useState('');
    const [childrenCount, setChildrenCount] = useState('');
    const [DHEA, setDHEA] = useState(false);
    const [Q10, setQ10] = useState(false);
    const [Genetics, setGenetics] = useState(null);
    const [Varicocele, setVaricocele] = useState(null); // Correct / Incorrect
    const [Tests, setTests] = useState(null); // Correct / Incorrect
    const [Inflammation, setInflammation] = useState(false);
    const [Functional_Problems, setFunctional_Problems] = useState(false);
    const [Hormones, setHormones] = useState(null); // Correct / Incorrect
    const [Medications_and_Vitamins, setMedications_and_Vitamins] = useState('');
    const [Hysteroscopy, setHysteroscopy] = useState(null);
    const [Uterine_X_ray, setUterine_X_ray] = useState(null);
    const [Profile, setProfile] = useState(null);
    const [Follow_up, setFollow_up] = useState(null);
    const [Lining_thickness_at_ovulation, setLining_thickness_at_ovulation] = useState('');
    const [Day21_Estradiol, setDay21_Estradiol] = useState('');
    const [Day21_Progesterone, setDay21_Progesterone] = useState('');
    const [Fluid_in_the_pelvis_or_uterus, setFluid_in_the_pelvis_or_uterus] = useState(null);
    const [Virgocele, setVirgocele] = useState(null);
    const [Menstrual_tests, setMenstrual_tests] = useState(null);
    const [Coagulation, setCoagulation] = useState(null);
    const [Thyroid_gland, setThyroid_gland] = useState(null);
    const [Male_fertility, setMale_fertility] = useState(false);
    const [Number_of_miscarriages, setNumber_of_miscarriages] = useState('');
    const [miscarriages_weeks, setMiscarriages_weeks] = useState('');
    const [Spotting_before_miscarriage, setSpotting_before_miscarriage] = useState(null);
    const [Sac_without_embryo, setSac_without_embryo] = useState('');
    const [Fruits_compatible_in_size, setFruits_compatible_in_size] = useState(null);
    const [Folic_acid_5_mg, setFolic_acid_5_mg] = useState(null);
    const [MTHFR, setMTHFR] = useState(null);
    const [Lupus, setLupus] = useState(null);
    const [Autoimmune, setAutoimmune] = useState(null);
    const [Progesterone_and_support, setProgesterone_and_support] = useState(null);
    const [Mucosal_inflammatory_infection, setMucosal_inflammatory_infection] = useState(null);
    const [IVIG, setIVIG] = useState(null);
    const [Bleeding_during_pregnancy_Week, setBleeding_during_pregnancy_Week] = useState('');
    const [Hematoma_size, setHematoma_size] = useState('');
    const [Saving, setSaving] = useState(null); // Yes / No
    const [Protein_powder, setProtein_powder] = useState(null); // Yes / No
    const [Utrogestan, setUtrogestan] = useState('');
    const [Instructions_regarding_discontinuation, setInstructions_regarding_discontinuation] = useState(null); // Yes / No
    const [Moxifen, setMoxifen] = useState(null); // Yes / No
    const [Neck_length, setNeck_length] = useState('');       // Number expected
    const [Birth_history, setBirth_history] = useState('');   // String
    const [Medications, setMedications] = useState('');       // String
    const afcOptions = [
        { label: 'תקין', value: 'Correct' },
        { label: 'לא תקין', value: 'Incorrect' },
    ];
    const enumOptions = [
        { label: 'תקין', value: 'Correct' },
        { label: 'לא תקין', value: 'Incorrect' },
    ];
    const yesNoOptions = [
        { label: 'כן', value: 'Yes' },
        { label: 'לא', value: 'No' }
    ];
    const weightOptions = [
        { label: 'תקין', value: 'Normall' },
        { label: 'גבוה', value: 'hight' },
        { label: 'נמוך', value: 'low' },
    ];
    const geneticsOptions = [
        { label: 'תקין', value: 'Correct' },
        { label: 'לא תקין', value: 'Incorrect' },
    ];
        const baseUrl = "https://ayali-server.onrender.com";

    useEffect(() => {
        save();
    }, []);
    const save = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/clients/${phone}`);
            const client = data.client || data; // לפי מה שהשרת שלך מחזיר

            if (client) {
                setPolycysticOvaries(client.Polycystic_ovaries || false);
                setLowOvarianReserve(client.Low_ovarian_reserve || false);
                setMaleFertility(client.Male_fertility || false);
                setNoFertility(client.Infertility || false);
                setRecurringMiscarriages(client.Recurrent_miscarriages || false);
                setPregnancyBleeding(client.Bleeding_during_pregnancy || false);
                setContractions(client.Contractions_or_cervical_shortening || false);
                setHighRiskPregnancy(client.Pregnancy_complications || false);
                setGestationalDiabetes(client.Gestational_diabetes || false);
                setPrevention(client.Prevention || false);
                setNursingBleeding(client.Bleeding_during_breastfeeding || false);
                setOtherReason(client.Other || false);
                setOtherReasonText(client.Other_des || '');
                setLH_before_dieting(client.LH_before_dieting || '');
                setFSH_before_dieting(client.FSH_before_dieting || '');
                setLH_after_dieting(client.LH_after_dieting || '');
                setFSH_after_dieting(client.FSH_after_dieting || '');
                setAndrogens(client.Androgens || false);
                setAFC(client.AFC || null);
                setDiet_start_date(client.Diet_start_date || '');
                setMedicines_and_vitamins(client.Medicines_and_vitamins || '');
                setCruises(client.Cruises || '');
                setIntermenstrual_bleeding(client.Intermenstrual_bleeding || false);
                setNormal_weight(client.Normal_weight || null);
                setFSH(client.FSH || '');
                setAMH(client.AMH || '');
                setAge(client.age || '');
                setChildrenCount(client.childrenCount || '');
                setDHEA(client.DHEA || false);
                setQ10(client.Q10 || false);
                setGenetics(client.Genetics || null);
                setVaricocele(client.boy?.Varicocele || null);
                setTests(client.boy?.Tests || null);
                setInflammation(client.boy?.Inflammation || false);
                setFunctional_Problems(client.boy?.Functional_Problems || false);
                setHormones(client.boy?.Hormones || null);
                setMedications_and_Vitamins(client.boy?.Medications_and_Vitamins || '');
                setHysteroscopy(client.Hysteroscopy || null);
                setUterine_X_ray(client.Uterine_X_ray || null);
                setProfile(client.Profile || null);
                setFollow_up(client.Follow_up || null);
                setLining_thickness_at_ovulation(client.Lining_thickness_at_ovulation || '');
                setDay21_Estradiol(client.Day21?.Estradiol || '');
                setDay21_Progesterone(client.Day21?.Progesterone || '');
                setFluid_in_the_pelvis_or_uterus(client.Fluid_in_the_pelvis_or_uterus || null);
                setVirgocele(client.Virgocele || null);
                setMenstrual_tests(client.Menstrual_tests || null);
                setCoagulation(client.Coagulation || null);
                setThyroid_gland(client.Thyroid_gland || null);
                setMale_fertility(client.Male_fertility || false);
                setNumber_of_miscarriages(client.Number_of_miscarriages || '');
                setMiscarriages_weeks(client.miscarriages_weeks || '');
                setSpotting_before_miscarriage(client.Spotting_before_miscarriage || null);
                setSac_without_embryo(client.Sac_without_embryo || '');
                setFruits_compatible_in_size(client.Fruits_compatible_in_size || null);
                setFolic_acid_5_mg(client.Folic_acid_5_mg || null);
                setMTHFR(client.MTHFR || null);
                setLupus(client.Lupus || null);
                setAutoimmune(client.Autoimmune || null);
                setProgesterone_and_support(client.Progesterone_and_support || null);
                setMucosal_inflammatory_infection(client.Mucosal_inflammatory_infection || null);
                setIVIG(client.IVIG || null);
                setBleeding_during_pregnancy_Week(client.Bleeding_during_pregnancy_Week || '');
                setHematoma_size(client.Hematoma_size || '');
                setSaving(client.Saving || null);
                setProtein_powder(client.Protein_powder || null);
                setUtrogestan(client.Utrogestan || '');
                setInstructions_regarding_discontinuation(client.Instructions_regarding_discontinuation || null);
                setMoxifen(client.Moxifen || null);
                setNeck_length(client.Neck_length || '');
                setBirth_history(client.Birth_history || '');
                setMedications(client.Medications || '');
            }
        } catch (error) {
            console.error("שגיאה בקבלת נתוני הלקוח:", error.message);
        }
    };
    const save2 = async () => {
        const referralReasons = {
            Polycystic_ovaries: PolycysticOvaries,
            Low_ovarian_reserve: LowOvarianReserve,
            Male_fertility: MaleFertility,
            Infertility: NoFertility,
            Recurrent_miscarriages: RecurringMiscarriages,
            Bleeding_during_pregnancy: PregnancyBleeding,
            Contractions_or_cervical_shortening: Contractions,
            Pregnancy_complications: HighRiskPregnancy,
            Gestational_diabetes: GestationalDiabetes,
            Prevention: Prevention,
            Bleeding_during_breastfeeding: NursingBleeding,
            Other: OtherReason,
            Other_des: OtherReasonText,
        };

        const { data } = await axios.put(`${baseUrl}/clients/${phone}`, referralReasons);
        console.log(data);
        navigate(`/clients/${phone}`)

    }
    const save3 = async () => {
        const requestBody = {
            LH_before_dieting,
            FSH_before_dieting,
            LH_after_dieting,
            FSH_after_dieting,
            Androgens,
            AFC,
            Diet_start_date,
            Medicines_and_vitamins,
            Cruises,
            Intermenstrual_bleeding,
            Normal_weight
        };
        const { data } = await axios.put(`${baseUrl}/clients/${phone}`, requestBody);
        console.log(data);
        setVisible1(false)
    }
    const save4 = async () => {
        const requestBody = {
            FSH: Number(FSH),                     // המרה ל-Number אם תרצה
            AMH: Number(AMH),
            age: Number(age),
            childrenCount: Number(childrenCount),
            DHEA: DHEA,
            Q10: Q10,
            AFC: AFC,
            Genetics: Genetics
        };
        const { data } = await axios.put(`${baseUrl}/clients/${phone}`, requestBody);
        console.log(data);
        setVisible2(false)
    }
    const save5 = async () => {
        const requestBody = {
            boy: {
                Varicocele,
                Tests,
                Inflammation,
                Functional_Problems,
                Hormones,
                Medications_and_Vitamins,
            }
        };
        const { data } = await axios.put(`${baseUrl}/clients/${phone}`, requestBody);
        console.log(data);
        setVisible4(false)
    }
    const save6 = async () => {
        const requestBody = {
            Hysteroscopy, // Correct / Incorrect
            Uterine_X_ray, // Correct / Incorrect
            Profile, // Correct / Incorrect
            Follow_up, // Correct / Incorrect
            Lining_thickness_at_ovulation: Lining_thickness_at_ovulation || '',
            Day21: {
                Estradiol: Day21_Estradiol || '',
                Progesterone: Day21_Progesterone || ''
            },
            Fluid_in_the_pelvis_or_uterus, // Yes / No
            Virgocele, // Yes / No
            Menstrual_tests, // Correct / Incorrect
            Coagulation, // Correct / Incorrect
            Thyroid_gland, // Correct / Incorrect
            Male_fertility: Male_fertility || false,
            Genetics // Correct / Incorrect
        }

        const { data } = await axios.put(`${baseUrl}/clients/${phone}`, requestBody);
        console.log(data);
        setVisible3(false)
    };
    const save7 = async () => {
        const requestBody = {
            Number_of_miscarriages: Number_of_miscarriages || null,
            miscarriages_weeks: miscarriages_weeks || null,
            Spotting_before_miscarriage: Spotting_before_miscarriage || null,
            Sac_without_embryo: Sac_without_embryo || null,
            Fruits_compatible_in_size: Fruits_compatible_in_size || null,
            Hysteroscopy: Hysteroscopy || null,
            Folic_acid_5_mg: Folic_acid_5_mg || null,
            Coagulation: Coagulation || null,
            MTHFR: MTHFR || null,
            Lupus: Lupus || null,
            Autoimmune: Autoimmune || null,
            Progesterone_and_support: Progesterone_and_support || null,
            Genetics: Genetics || null,
            Thyroid_gland: Thyroid_gland || null,
            Mucosal_inflammatory_infection: Mucosal_inflammatory_infection || null,
            IVIG: IVIG || null
        };

        const { data } = await axios.put(`${baseUrl}/clients/${phone}`, requestBody);
        console.log(data);
        setVisible5(false)
    };
    const save8 = async () => {
        const requestBody = {
            Bleeding_during_pregnancy_Week: Number(Bleeding_during_pregnancy_Week), // מספר
            Hematoma_size: Hematoma_size || '', // מחרוזת
            Saving: Saving || null, // "Yes" / "No"
            Protein_powder: Protein_powder || null, // "Yes" / "No"
            Utrogestan: Utrogestan || '', // מחרוזת
            Instructions_regarding_discontinuation: Instructions_regarding_discontinuation || null, // "Yes" / "No"
            Moxifen: Moxifen || null // "Yes" / "No"
        }
        const { data } = await axios.put(`${baseUrl}/clients/${phone}`, requestBody);
        console.log(data);
        setVisible6(false)
    };
    const save9 = async () => {
        const requestBody = {
            Contractions_or_cervical_shortening: Contractions,
            Neck_length: Number(Neck_length) || 0,
            Birth_history,
            Medications
        };
        const { data } = await axios.put(`${baseUrl}/clients/${phone}`, requestBody);
        console.log(data);
        setVisible7(false)
    };
    return (
        <div style={{ marginTop: '2rem', display: "flex", flexDirection: "column", gap: "25px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#141F3F" }}>
            <h1 style={{ color: "white" }}>:סיבת הפניה</h1>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p1" value={PolycysticOvaries} checked={PolycysticOvaries} onChange={e => setPolycysticOvaries(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} htmlFor="p1" onClick={() => { setVisible1(true) }}>שחלות פוליציסטיות</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p2" value={LowOvarianReserve} checked={LowOvarianReserve} onChange={e => setLowOvarianReserve(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} onClick={() => { setVisible2(true) }} htmlFor="p2">רזרבה שחלתית נמוכה</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p3" value={MaleFertility} checked={MaleFertility} onChange={e => setMaleFertility(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} onClick={() => { setVisible4(true) }} htmlFor="p3">פוריות הגבר</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p4" value={NoFertility} checked={NoFertility} onChange={e => setNoFertility(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} onClick={() => { setVisible3(true) }} htmlFor="p4">העדר פוריות</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p5" value={RecurringMiscarriages} checked={RecurringMiscarriages} onChange={e => setRecurringMiscarriages(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} onClick={() => { setVisible5(true) }} htmlFor="p5">הפלות חוזרות</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p6" value={PregnancyBleeding} checked={PregnancyBleeding} onChange={e => setPregnancyBleeding(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} onClick={() => { setVisible6(true) }} htmlFor="p6">דימומים בהריון</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p7" value={Contractions} checked={Contractions} onChange={e => setContractions(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} onClick={() => { setVisible7(true) }} htmlFor="p7">צירים או קיצור צוואר</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p8" value={HighRiskPregnancy} checked={HighRiskPregnancy} onChange={e => setHighRiskPregnancy(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} htmlFor="p8">הריון בסיכון – קרישה / אולטרסאונד לא תקין / אחרי הפלות</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p9" value={GestationalDiabetes} checked={GestationalDiabetes} onChange={e => setGestationalDiabetes(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} htmlFor="p9">סכרת הריונית</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p10" value={Prevention} checked={Prevention} onChange={e => setPrevention(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} htmlFor="p10">מניעה</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p11" value={NursingBleeding} checked={NursingBleeding} onChange={e => setNursingBleeding(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} htmlFor="p11">דימומים בהנקה</Link>
            </div>
            <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor: "rgba(255, 255, 255, 0.63)", height: "8vh", alignItems: "center", color: "white", width: "40vw", paddingLeft: "40px", borderRadius: "5px" }}>
                <Checkbox inputId="p12" value={OtherReason} checked={OtherReason} onChange={e => setOtherReason(e.checked)} />
                <Link style={{ textDecoration: "none", color: "#141F3F" }} htmlFor="p12">אחר</Link>
                {OtherReason && (
                    <InputText
                        style={{ marginTop: '120px', width: '100%' }}
                        placeholder="פירוט נוסף"
                        value={OtherReasonText}
                        onChange={e => setOtherReasonText(e.target.value)}
                    />
                )}
            </div>
            <Button onClick={save2} style={{ marginTop: '50px' }}>שמור</Button>
            <Dialog header="פרטי הפנייה" visible={visible1} onHide={() => { setVisible1(false) }} style={{ width: '40vw' }}>
                <div className="p-fluid" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>לפני דיאטה LH רמות</label>
                            <InputText value={LH_before_dieting} onChange={(e) => setLH_before_dieting(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>לפני דיאטה FSH רמות</label>
                            <InputText value={FSH_before_dieting} onChange={(e) => setFSH_before_dieting(e.target.value)} />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}> מעודכנות LH רמות</label>
                            <InputText value={LH_after_dieting} onChange={(e) => setLH_after_dieting(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}> מעודכנות FSH רמות</label>
                            <InputText value={FSH_after_dieting} onChange={(e) => setFSH_after_dieting(e.target.value)} />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px", marginTop: "25px" }}>

                        <div className="p-field-checkbox" style={{ display: "flex", gap: "15px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="androgens">אנדרוגנים</label>
                            <Checkbox inputId="androgens" checked={Androgens} onChange={(e) => setAndrogens(e.checked)} />
                        </div>
                        <div className="p-field-checkbox" style={{ display: "flex", gap: "15px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="intermenstrual">דימומים בין וסתיים</label>
                            <Checkbox inputId="intermenstrual" checked={Intermenstrual_bleeding} onChange={(e) => setIntermenstrual_bleeding(e.checked)} />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px", marginTop: "25px" }}>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", flexDirection: "column" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>תאריך התחלת דיאטה</label>
                            <InputText style={{ width: "15vw", textAlign: "center" }} value={Diet_start_date} onChange={(e) => setDiet_start_date(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", flexDirection: "column" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>תרופות וויטמינים</label>
                            <InputText value={Medicines_and_vitamins} onChange={(e) => setMedicines_and_vitamins(e.target.value)} />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>

                        <div style={{ display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", justifyContent: "center" }}>
                            <InputText value={Cruises} style={{ width: "50px" }} onChange={(e) => setCruises(e.target.value)} />
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>הפלגות</label>
                        </div>
                        <div style={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "center" }}>
                            <Dropdown value={Normal_weight} options={weightOptions} onChange={(e) => setNormal_weight(e.value)} placeholder="בחר" />
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>משקל</label>
                        </div>
                        <div style={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "center" }}>
                            <Dropdown value={AFC} options={afcOptions} onChange={(e) => setAFC(e.value)} placeholder="בחר" />
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>AFC</label>
                        </div>

                    </div>
                </div>
                <Button style={{ marginTop: "15px" }} onClick={save3}>שמור</Button>
            </Dialog>
            <Dialog header="רזרבה שחלתית נמוכה" visible={visible2} onHide={() => { setVisible2(false) }} style={{ width: '40vw' }}>
                <div className="p-fluid" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>FSH רמות </label>
                            <InputText value={FSH} onChange={(e) => setFSH(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>AMH רמות</label>
                            <InputText value={AMH} onChange={(e) => setAMH(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>גיל</label>
                            <InputText value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <InputText value={childrenCount} style={{ width: "50px" }} onChange={(e) => setChildrenCount(e.target.value)} />
                        <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>מספר ילדים</label>
                        <Dropdown value={AFC} options={afcOptions} onChange={(e) => setAFC(e.value)} placeholder="בחר" />
                        <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>AFC</label>
                        <Dropdown value={Genetics} options={geneticsOptions} onChange={(e) => setGenetics(e.value)} placeholder="בחר" />
                        <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>גנטיקה</label>
                    </div>
                    <div style={{ marginTop: "15px", display: "flex", gap: "35px" }}>
                        <div className="p-field-checkbox" style={{ display: "flex", gap: "8px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="dhea">DHEA</label>
                            <Checkbox inputId="dhea" checked={DHEA} onChange={(e) => setDHEA(e.checked)} />
                        </div>
                        <div className="p-field-checkbox" style={{ display: "flex", gap: "8px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="q10">Q10</label>
                            <Checkbox inputId="q10" checked={Q10} onChange={(e) => setQ10(e.checked)} />
                        </div>
                    </div>
                </div>
                <Button onClick={save4}>שמור</Button>
            </Dialog>
            <Dialog header="פוריות הגבר" visible={visible4} onHide={() => { setVisible4(false) }} style={{ width: '40vw' }}>
                <div className="p-fluid" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "25px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px", alignItems: "center", justifyContent: "center" }}>וריקוצלה</label>
                            <Dropdown
                                value={Varicocele}
                                options={enumOptions}
                                onChange={(e) => setVaricocele(e.value)}
                                placeholder="בחר"
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>בדיקות</label>
                            <Dropdown
                                value={Tests}
                                options={enumOptions}
                                onChange={(e) => setTests(e.value)}
                                placeholder="בחר"
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>הורמונים</label>
                            <Dropdown
                                value={Hormones}
                                options={enumOptions}
                                onChange={(e) => setHormones(e.value)}
                                placeholder="בחר"
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "30px", alignItems: "center", justifyContent: "center", marginTop: "25px" }}>
                        <div className="p-field-checkbox" style={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "center" }}>

                            <div className="p-field-checkbox" style={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "center" }}>
                                <Checkbox
                                    inputId="inflammation"
                                    checked={Inflammation}
                                    onChange={(e) => setInflammation(e.checked)}
                                />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="inflammation">דלקת</label>
                            </div>
                            <div className="p-field-checkbox" style={{ display: "flex", gap: "15px" }}>
                                <Checkbox
                                    inputId="functional_problems"
                                    checked={Functional_Problems}
                                    onChange={(e) => setFunctional_Problems(e.checked)}
                                />
                                <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="functional_problems">בעיות תפקוד</label>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
                        <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>תרופות וויטמינים</label>
                        <InputText style={{ width: "15vw" }}
                            value={Medications_and_Vitamins}
                            onChange={(e) => setMedications_and_Vitamins(e.target.value)}
                        />
                    </div>
                </div>
                <Button onClick={save5}>שמור</Button>
            </Dialog>
            <Dialog header="העדר פוריות" visible={visible3} onHide={() => { setVisible3(false) }} style={{ width: '40vw' }}>
                <div className="p-fluid" style={{ display: "flex", gap: "25px", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px", marginRight: "15px" }}>היסטרוסקופיה</label>
                            <Dropdown value={Hysteroscopy} options={enumOptions} onChange={(e) => setHysteroscopy(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px", alignItems: "center", justifyContent: "center" }}>צילום רחם</label>
                            <Dropdown value={Uterine_X_ray} options={enumOptions} onChange={(e) => setUterine_X_ray(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px", alignItems: "center", justifyContent: "center" }}>פרופיל</label>
                            <Dropdown value={Profile} options={enumOptions} onChange={(e) => setProfile(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px", alignItems: "center", justifyContent: "center" }}>מעקב</label>
                            <Dropdown value={Follow_up} options={enumOptions} onChange={(e) => setFollow_up(e.value)} placeholder="בחר" />
                        </div></div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>עובי רירית בביוץ</label>
                            <InputText value={Lining_thickness_at_ovulation} onChange={(e) => setLining_thickness_at_ovulation(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>יום 21 – אסטרדיול</label>
                            <InputText value={Day21_Estradiol} onChange={(e) => setDay21_Estradiol(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>יום 21 – פרוגסטרון</label>
                            <InputText value={Day21_Progesterone} onChange={(e) => setDay21_Progesterone(e.target.value)} />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>נוזל באגן או ברחם</label>
                            <Dropdown value={Fluid_in_the_pelvis_or_uterus} options={yesNoOptions} onChange={(e) => setFluid_in_the_pelvis_or_uterus(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>וריקוצלה</label>
                            <Dropdown value={Virgocele} options={yesNoOptions} onChange={(e) => setVirgocele(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>בדיקות הגבר</label>
                            <Dropdown value={Menstrual_tests} options={enumOptions} onChange={(e) => setMenstrual_tests(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>קרישה</label>
                            <Dropdown value={Coagulation} options={enumOptions} onChange={(e) => setCoagulation(e.value)} placeholder="בחר" />
                        </div></div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>בלוטת התריס</label>
                            <Dropdown value={Thyroid_gland} options={enumOptions} onChange={(e) => setThyroid_gland(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>גנטיקה</label>
                            <Dropdown value={Genetics} options={enumOptions} onChange={(e) => setGenetics(e.value)} placeholder="בחר" />
                        </div>
                    </div>
                </div>
                <Button onClick={save6} style={{ marginTop: "25px" }}>שמור</Button>
            </Dialog>
            <Dialog header="הפלות חוזרות" visible={visible5} onHide={() => { setVisible5(false) }} style={{ width: '40vw' }}>
                <div className="p-fluid" style={{ display: "flex", gap: "18px", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>מספר הפלות ברצף</label>
                            <InputText value={Number_of_miscarriages} onChange={(e) => setNumber_of_miscarriages(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>שבועות (כולל תואם)</label>
                            <InputText value={miscarriages_weeks} onChange={(e) => setMiscarriages_weeks(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>שק בלי עובר</label>
                            <InputText value={Sac_without_embryo} onChange={(e) => setSac_without_embryo(e.target.value)} />
                        </div>
                    </div>
                     <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>קרישה</label>
                            <Dropdown value={Coagulation} options={enumOptions} onChange={(e) => setCoagulation(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>MTHFR</label>
                            <Dropdown value={MTHFR} options={enumOptions} onChange={(e) => setMTHFR(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>לופוס</label>
                            <Dropdown value={Lupus} options={enumOptions} onChange={(e) => setLupus(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>IVIG</label>
                            <Dropdown value={IVIG} options={enumOptions} onChange={(e) => setIVIG(e.value)} placeholder="בחר" />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>כתמים לפני ההפלה</label>
                            <Dropdown value={Spotting_before_miscarriage} options={yesNoOptions} onChange={(e) => setSpotting_before_miscarriage(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>עוברים תואמים לגודל</label>
                            <Dropdown value={Fruits_compatible_in_size} options={yesNoOptions} onChange={(e) => setFruits_compatible_in_size(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>חומצה פולית 5 מ"ג</label>
                            <Dropdown value={Folic_acid_5_mg} options={yesNoOptions} onChange={(e) => setFolic_acid_5_mg(e.value)} placeholder="בחר" />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>פרוגסטרון ותמיכה</label>
                            <Dropdown value={Progesterone_and_support} options={yesNoOptions} onChange={(e) => setProgesterone_and_support(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>זיהום דלקתי ברירית</label>
                            <Dropdown value={Mucosal_inflammatory_infection} options={yesNoOptions} onChange={(e) => setMucosal_inflammatory_infection(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>היסטרוסקופיה</label>
                            <Dropdown value={Hysteroscopy} options={enumOptions} onChange={(e) => setHysteroscopy(e.value)} placeholder="בחר" />
                        </div>
                    </div>
                   
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>אוטואימוני</label>
                            <Dropdown value={Autoimmune} options={enumOptions} onChange={(e) => setAutoimmune(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>גנטיקה</label>
                            <Dropdown value={Genetics} options={enumOptions} onChange={(e) => setGenetics(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>בלוטת התריס</label>
                            <Dropdown value={Thyroid_gland} options={enumOptions} onChange={(e) => setThyroid_gland(e.value)} placeholder="בחר" />
                        </div>
                    </div>
                </div>
                <Button onClick={save7} style={{ marginTop: "10px" }}>שמור</Button>
            </Dialog >
            <Dialog header="דימומים בהריון" visible={visible6} onHide={() => setVisible6(false)} style={{ width: '40vw' }}>
                <div className="p-fluid" style={{ display: "flex", gap: "25px", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>שבוע</label>
                            <InputText value={Bleeding_during_pregnancy_Week} onChange={(e) => setBleeding_during_pregnancy_Week(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>גודל המטומה</label>
                            <InputText value={Hematoma_size} onChange={(e) => setHematoma_size(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>אוטרוגסטן</label>
                            <InputText value={Utrogestan} onChange={(e) => setUtrogestan(e.target.value)} />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>שמירה</label>
                            <Dropdown value={Saving} options={yesNoOptions} onChange={(e) => setSaving(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>אבקת חלבון</label>
                            <Dropdown value={Protein_powder} options={yesNoOptions} onChange={(e) => setProtein_powder(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>הנחיות לגבי הפסק</label>
                            <Dropdown value={Instructions_regarding_discontinuation} options={yesNoOptions} onChange={(e) => setInstructions_regarding_discontinuation(e.value)} placeholder="בחר" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>

                            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>מוקסיפן</label>
                            <Dropdown value={Moxifen} options={yesNoOptions} onChange={(e) => setMoxifen(e.value)} placeholder="בחר" />
                        </div>
                    </div>
                </div>
                <Button onClick={save8} style={{ marginTop: "15px" }}>שמור</Button>
            </Dialog>
            <Dialog header="צירים או קיצור צוואר" visible={visible7} onHide={() => setVisible7(false)} style={{ width: '40vw' }}>
                <div className="p-fluid" style={{ display: "flex", gap: "25px", flexDirection: "column" }}>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>אורך צוואר</label>
                        <InputText value={Neck_length} onChange={(e) => setNeck_length(e.target.value)} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>היסטורית לידות</label>
                        <InputText value={Birth_history} onChange={(e) => setBirth_history(e.target.value)} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>תרופות</label>
                        <InputText value={Medications} onChange={(e) => setMedications(e.target.value)} />
                    </div>
                    <div className="p-field-checkbox" style={{ display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", justifyContent: "center" }}>
                        <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }} htmlFor="contractions">צירים או קיצור צוואר</label>
                        <Checkbox inputId="contractions" checked={Contractions} onChange={(e) => setContractions(e.checked)} />
                    </div>
                </div>
                <Button label="שמור" onClick={save9} />
            </Dialog>
            <video autoPlay muted loop playsInline style={{
                position: "fixed", bottom: "0", width: "100%", height: "50%", overflow: 'hidden', zIndex: "-1", objectFit: 'cover',
            }}>
                <source src="/heart.MP4" type="video/MP4"></source>
            </video>
        </div >
    );
};
export default ClientPer

