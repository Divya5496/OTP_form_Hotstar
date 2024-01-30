import { useState } from "react";


const PhoneOtpForm = () => {

    const [phoneNumber , setPhoneNumber] = useState("");
    const handlePhoneNumber = ()=>{

    }

  return(
    <div>
        <form onSubmit={()=>{}}>
            <input type="text" value ={phoneNumber} 
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"/>

        </form>
    </div>
)};

export default PhoneOtpForm;