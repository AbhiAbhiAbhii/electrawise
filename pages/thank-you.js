/* eslint-disable @next/next/no-img-element */
export default function Thanks() {
    return(
      <section className="thankYou">
        <div className="thankYouContent">
            <div className="thanksContainer">
                <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/thanks.svg" alt=""/>
            </div>
            <div className="thanksTextContainer">
                <div className="thanksText inter-b"><p color="#000">Thank you for submitting</p></div>
                <div className="thanksSubText inter-r"><p style={{color:'grey'}}>Our customer executive will get in touch with you within 48hrs</p></div>
            </div>
        </div>
      </section>
    )
}