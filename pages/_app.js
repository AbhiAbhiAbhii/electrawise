import Script from 'next/script'
import Footer from '../src/components/Footer/Footer'
import NavBar from '../src/components/NavBar/NavBar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Script
      strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-C6LZG46DLG`}
      />

  <Script id="google-analytics-script" strategy="afterInteractive">
    {`

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-C6LZG46DLG' , {
        page_path: window.location.pathname,
      });

     
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3484048,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');


      `}

  </Script>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      {/* gtag('config', 'AW-11117880810'); */}

    </>
  )
}
