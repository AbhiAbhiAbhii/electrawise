import Globe from "../Globe/Globe"

export default function ContactUs() {
    return(
        <section className='contactUs'>
        <div className='contactUsContent'>
          <div className='contactUsContentTop'>
            <div className='topA inter-sb'>
              <div className="mobHide"><p>Go solar<br/> and cut cost up to</p></div>
              <div className="topATitle deskHide"><p>Go solar and<br/> cut cost up to</p></div>
              <div className='topASubTitle bigGreenText inter-b'><p>90%</p></div>
            </div>
            <div className='topB inter-m'>
              <div className="mobHide"><p>Install high-quality solar panels and<br/> optimize your energy consumption.</p></div>
              <div className="mobHide"><p>Enjoy the benefits of clean,<br/> renewable energy while saving<br/> money on your bills.</p></div>
              <div className="deskHide" style={{width:'50%'}}><p>Install high-quality solar<br/> panels and optimize your energy consumption.</p></div>
              <div className="deskHide" style={{width:'50%'}}><p>Enjoy the benefits of clean,<br/> renewable energy while<br/> saving money on your bills.</p></div>
            </div>
          </div>
          <div className='contactUsContentBottom'>
            <div className='bgDark' style={{borderRadius:'.4rem'}}>
              <div className="emiContainer">
                <div className="emiText">
                  <div className="emiLogoText">
                    <div className='emiImgContainer'><img src='/emiIcon.png' alt=""/></div>
                    <div className='cUsBottomTextA inter-m snow'><p>EMI options are<br/> available for our panels</p></div>
                  </div>
                  <div className='cUsBottomTextB inter-sb snow'>
                    <p>End-to-End Solar<br/> Energy Services</p>
                  </div>
                  <div>
                    <a href="#form">
                    <button style={{cursor:'pointer'}} className='cUsBtn inter-b'>Contact Us</button>
                    </a>
                  </div>
                </div>
                <Globe />
              </div>
              <div className="emiLogoTextMob" style={{marginTop:'2rem'}}>
                <div style={{padding:'1rem 0',display:'flex',justifyContent:'center'}}>
                  <button className='cUsBtnMobile inter-b'>Contact Us</button>
                </div> 
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}> 
                  <div className='emiImgContainer'><img src='/emiIcon.png' alt=""/></div>
                  <div className='cUsBottomTextA inter-m snow'><p>EMI options are available for our panels</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}