

export default function OurServices() {

    const servicesContent = [
        {
          text: 'On Grid Solar Power Plant'
        },
        {
          text: 'Off Grid Solar Power'
        },
        {
          text: 'Solar power plant Maintenance (AMC and CMC)'
        },
        {
          text: 'Solar power plant cleaning '
        },
        {
          text: 'Solar power plant installation in Kilo Watt rate'
        },
        {
          text: 'Solar power plant reinstallation'
        },
        {
          text: 'I- Phase, III- Phase Energy Meter, I- Phase Net Meter, III-Phase Net Meter'
        }
      ]

    return(
        <section className='ourServices'>
        <div className="ourServicesInner">
          <div className='servicesWrapper'>
            <div className="servicesWrapperA">
              <div className="servicesWrapperAInner">
                <div className='ourServicesTitle inter-sb'><p style={{color:'#001D38'}}>Our Services</p></div>
                <div>
                  {
                    servicesContent.map((data,i) => {
                      return(
                        <div className='servicesContentContainer' key={i}>
                          <div className="tickContainer" style={{borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',background:'#000'}}><img style={{height:'70%',width:'70%',objectFit:'contain'}} src='/tick.png' alt='' /></div>
                          <div className='inter-m' style={{width:'90%'}}><p className="servicesDescript" style={{color:'#000'}}>{data.text}</p></div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="ourServicesBtnContainer">
                  <div className='ourServicesBtn inter-sb'><a href=''>Talk to us</a></div>
                </div>  
              </div>
            </div>
            <div className="servicesWrapperB">
              <div className="imageCanvas">
                <div className='servicesImgContainer'><img src='/ourServicesimg.png' alt='' /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}