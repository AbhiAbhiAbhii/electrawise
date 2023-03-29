/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return(
        <footer className='footer' style={{background:'#f5fbff'}}>
        <div className='footerContainer' style={{}}>
          <div className="footerInner" style={{}}>
            <div className='footerLogo inter-b' style={{}}>
              <Link href='/'>
              <div className="footerLogoContainer" style={{}}>
                <img style={{}}  src='/Electrawise Logo Final-02.svg' alt='' />
              </div>
              </Link>
              <div className="policyContainer inter-r">
                <Link href='/privacy-policy'>
                  <div className="policyText" style={{color:'grey'}}><p>Privacy Policy</p></div>
                </Link>
                <Link href='/terms-of-service'>
                  <div className="policyText" style={{color:'grey'}}><p>Terms of Service</p></div>
                </Link>
              </div>
            </div>
            <div className="footerTextContainer" style={{}}>
              <div className="footerAddressContainer" style={{}}>
                <div className="contactTop">
                  <div className="footerIcon"><img src='/address.svg' alt='' style={{height:'100%',width:'100%',objectFit:'cover'}} /></div><div className='inter-m'><p>Location</p></div>
                </div>
                <div className='contact inter-r'><p style={{color:'grey'}}>Electrawise Energy, Thapasya,<br/> Kazhakootam, Kerala 695582, INDIA</p></div>
              </div>
              <div className="footerContactContainer">
                <div className="contactTop">
                  <div className="footerIcon"><img src='/support.svg' alt='' style={{height:'100%',width:'100%',objectFit:'cover'}} /></div><div className='inter-m'><p>Contact</p></div>
                </div>
                <div className='contact inter-r'><a href="tel:+91 8848407006" style={{color:'grey'}}>+91 8848407006</a></div>
                <div className='contact inter-r'><a href="mailto:electrawiseenergyinfo@gmail.com" style={{color:'grey'}}>electrawiseenergyinfo@gmail.com</a></div>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    )
}