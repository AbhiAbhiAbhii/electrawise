import Footer from '../src/components/Footer/Footer'
import NavBar from '../src/components/NavBar/NavBar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
