

export default function WhyUsShowCase() {
    return(
        <div className="whyUsShowcase" style={{background:'linear-gradient(180deg, #FF8F1F 0%, #FFBC1F 100%)',borderRadius:'.4rem'}}>
            <div className="whyUsShowcaseInner" style={{background:'#FFF',borderRadius:'.2rem'}}>
                <div className="whyUsShowcaseInnerWrap">
                    <div className="whyUsDescriptContainer">
                    <div className="whyUsLogo"><img src='/ministryLogo.png' alt='' /></div>
                    <div className='whyUsLogoDescript inter-sb'><p style={{color:'#001D38'}}>Government Subsidy<br/> Available Now.</p></div>
                    </div>
                    <div className="whyUsBtnContainer">
                    <a href="#form"><div className='inter-b' style={{margin:'.8rem 0'}}><button className="getTouchBtn" style={{color:'#FFF',width:'100%',background:'#001D38',border:'none',borderRadius:'.2rem'}}>Get in Touch</button></div></a>
                    <div className='inter-b' style={{margin:'.8rem 0',width:'100%',border:'1px #000 solid',borderRadius:'.2rem',display:'flex',alignItems:'center',justifyContent:'center'}}><a className="callBtn" style={{color:'#001D38'}} href='tel:+91 884858200'>Call us at +971 884858200</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}