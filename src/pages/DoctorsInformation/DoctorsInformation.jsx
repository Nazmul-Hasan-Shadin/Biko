import React from 'react';
import BikoMedicalTreatment from '../Home/BIkoMedicalTreatment/BikoMedicalTreatment';
import doctorBioInfo from "../../assets/images/banner/bioimage.png";
import medicalTreatMent from "../../assets/images/banner/medicaltreatmentlogo.png";



const DoctorsInformation = () => {
    return (
        <div className='space-y-5'>
               <BikoMedicalTreatment image={medicalTreatMent}/>
            <BikoMedicalTreatment image={doctorBioInfo}/>
            <BikoMedicalTreatment image={doctorBioInfo}/>
            <BikoMedicalTreatment image={doctorBioInfo}/>
            <BikoMedicalTreatment image={doctorBioInfo}/>
        </div>
    );
};

export default DoctorsInformation;