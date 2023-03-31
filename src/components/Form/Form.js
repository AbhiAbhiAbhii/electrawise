import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function Form() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('')

    


    const disabled = fullName === "" || phoneNumber === "" || email === "" || location === "";
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(e)
       const formData = {
        fullName,
        phoneNumber,
        email,
        location,
        date
       } 
         console.log(formData)
       fetch ("/api/submit", {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type' : 'application/json'
        }
       })
    //    .then((res) => {
    //     if(res.status < 300) {
    //         router.reload("/thank-you");
    //         console.log("received");
    //             setTimeout(() => {
    //                 router.reload("/")
    //             }, 3000);
    //     }
    //     else {
    //         console.log("error")
    //     }
    //      })
         router.push("/thank-you");
        setTimeout(() => {
            router.push("/");
         }, [2500]) 

    }
    // Function to validate email 
    const [fullNameFocused, setfullNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [locationFocused, setLocationFocused] = useState(false);


    const focusName = (e) => {
        setfullNameFocused(true);
    }
    const focusEmail = (e) => {
        setEmailFocused(true);
    }
    const focusLocation = (e) => {
        setLocationFocused(true);
    }

    function generateDate() {
        var currentTime = new Date();                
        document.getElementbyId("dateHidden").value = curdate;
        var curdate = currentTime.getDate();
        return true; 
    }
    console.log(generateDate);

        

    return(
        <div className='formBox' id="form">
            <div className='formWrapper'>
                <div className='formTitle inter-sb'><p>Talk to our Solar Experts</p></div>
                <form  id="form1" action="JavaScript:generateDate()" method="POST" className='form'>
                    <div>
                        <label className='label inter-r'>Full Name*</label>
                        <input value={fullName} id="fullName" onChange={e => setFullName(e.target.value)}  required='true' onBlur={focusName} focused={fullNameFocused.toString()} pattern='^[A-z a-z]+$' name='fullname' type='text' placeholder='Full Name' />
                        <div className="error"><p>Enter a valid Full Name</p></div>
                    </div> 
                    <div>
                        <label className='label inter-r'>Phone Number*</label>
                        <div className="errorLabel" style={{display:'flex'}}>
                            <div className="INDIAContainer" style={{display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',borderTopLeftRadius:'.4rem',borderBottomLeftRadius:'.4rem'}}><p className='INDIA inter-m'>IN +91</p></div>
                            <div className="inputMob"><input id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} style={{borderBottomLeftRadius:'0',borderTopLeftRadius:'0',borderLeft:'0'}} required   name='phonenumber' type='text' placeholder='Phone Number' /></div>
                        </div>
                    </div>
                    <div>
                    <label className='label inter-r'>Email Address*</label>
                    <input id="email" value={email} onChange={e => setEmail(e.target.value)} required onBlur={focusEmail} focused={emailFocused.toString()}  name='emailaddress' type='email' placeholder='john@acme.com' />
                    <div className="error"><p>Enter a valid Email</p></div>
                    </div>
                    <div>
                    <label className='label inter-r'>Location*</label>
                    <input id="location" value={location} onChange={e => setLocation(e.target.value)} required onBlur={focusLocation} focused={locationFocused.toString()} name='location' type='text' placeholder='Preferred city for installation' />
                    <div className="error"><p>Enter Location</p></div>
                    </div>
                    <div>
                    <input onSubmit={generateDate} type="hidden" name="Language" id="dateHidden" onChange={e => setDate(e.target.value)} />
                    </div>
                    <button disabled={disabled} onClick={handleSubmit} value="Submit" style={{cursor:'pointer'}} className='formBtn inter-sb'>Get Started</button>
                </form>
            </div>
        </div>
    )
}