/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Script from "next/script"
export default function Thanks() {
    return(

      <>
      <Script
        strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-C6LZG46DLG`} /><Script id="google-analytics-script" strategy="afterInteractive">
          {`

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-C6LZG46DLG' , {
        page_path: window.location.pathname,
      });
      gtag('config', 'AW-11117880810');

      gtag('event', 'conversion', {'send_to': 'AW-11117880810/k1qHCNjA7JQYEOrLtbUp'});

      `}

        </Script>
        <section className="thankYou">
          <div className="thankYouContent">
            <div className="thanksContainer">
              <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src="/thanks.svg" alt="" />
            </div>
            <div className="thanksTextContainer">
              <div className="thanksText inter-b"><p color="#000">Thank you for submitting</p></div>
              <div className="thanksSubText inter-r"><p style={{ color: 'grey' }}>Our customer executive will get in touch with you within 48hrs</p></div>
            </div>
          </div>
        </section></>
    )
}