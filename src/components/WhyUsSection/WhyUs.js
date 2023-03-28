import LogoContainer from "../LogoContainer/LogoContainer"
import WhyUsShowCase from "../WhyUsShowCase/WhyUsShowCase"

export default function WhyUs() {
    return(
        <section className='whyUs'>
        <div style={{}}>
          <div className='whyUsA' style={{}}>
            <div className='whyUSTitle inter-sb'><p>Why Choose Us ?</p></div>
            <LogoContainer />
          </div>
          <div className='whyUsB' style={{padding:'4rem 0',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <WhyUsShowCase />
          </div>
        </div>
      </section>
    )
}