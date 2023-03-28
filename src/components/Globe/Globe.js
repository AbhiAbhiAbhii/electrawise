

export default function Globe() {

    const contactGlobe = [
        {
          textA: 'Step 01',
          textB: 'Solar Panel Financing'
        },
        {
          textA: 'Step 02',
          textB: 'Subsidy Registration'
        },
        {
          textA: 'Step 03',
          textB: 'Design and Installation'
        },
        {
          textA: 'Step 04',
          textB: 'Maintenance and Support'
        }
      ]

    return(
        <div className="globeContainer">
            {
                contactGlobe.map((data,i) => {
                return(
                    <div className="globe" key={i} style={{borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',background:'#005546'}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                        <div className='globeTextA inter-b'><p>{data.textA}</p></div>
                        <div className='globeTextB inter-m' style={{width:'76%',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'1.2rem 0'}}><p>{data.textB}</p></div>
                    </div>
                    </div>
                )
                })
            }
        </div>
    )
}