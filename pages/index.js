import Header from '../src/components/Header/Header'
import Hero from '../src/components/HeroSection/HeroSection'
import ContactUs from '../src/components/ContactSection/ContactUs'
import WhyUs from '../src/components/WhyUsSection/WhyUs'
import OurServices from '../src/components/OurServices/OurServices'
import Testimonial from '../src/components/Testimonial/Testimonial'

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <ContactUs />
      <WhyUs />
      <OurServices />
      {/* <Testimonial /> */}
    </>
  )
}
