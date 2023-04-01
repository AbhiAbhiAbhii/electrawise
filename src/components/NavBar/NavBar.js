/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


export default function NavBar() {
    return(
        <>
            <nav className="nav">
          <div className="navContainer">
            <Link href='/'>
                <div className='navLeft'><div className="navLogoContainer"><img src='/Electrawise Logo Final-02.svg' alt='' /></div></div>
            </Link>
              <div className="navTextContainer">
                <a href="tel:+91 8848582003">
                    <div className='phoneContainer'><div className='phoneIconContainer'><img src='/navPhoneIcon.svg' alt='' /></div><p className='inter-m' style={{color:'#001D38'}}>+91 8848582003</p></div>
                </a>
                <a href="#form">
                    <div className='subsidyBtn inter-sb'><p style={{color:'#FFF'}}>Enquire Subsidy</p></div>
                </a>
              </div>
          </div>
      </nav>
        </>
    )
}
