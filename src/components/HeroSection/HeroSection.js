import Form from "../Form/Form"
import HeroTitle from "../HeroTitle/HeroTitle"

export default function Hero() {
    return(
        <main className='hero'>
        <div className='heroWrapper'>
          <div className='heroContentA'>
            <HeroTitle />
          </div>
          <div className='heroContentB'>
            <Form />
          </div>
        </div>
      </main>
    )
}