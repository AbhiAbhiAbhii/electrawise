import Head from "next/head"

export default function Header() {
    return(
        <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Primary Meta Tags */}
        <title>Electrawise | Solar Panels in Kerala | Save 80% on bills</title>
        <meta name="title" content="Electrawise | Solar Panels in Kerala | Save 80% on bills" />
        <meta name="description" content="Say goodbye to high energy bills with solar panels. Electrawise can help you save up to 80% on your energy bill!" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solarpanels.electrawise.in/" />
        <meta property="og:title" content="Electrawise | Solar Panels in Kerala | Save 80% on bills" />
        <meta property="og:description" content="Say goodbye to high energy bills with solar panels. Electrawise can help you save up to 80% on your energy bill!" />
        <meta property="og:image" content="/meta-img.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://solarpanels.electrawise.in/" />
        <meta property="twitter:title" content="Electrawise | Solar Panels in Kerala | Save 80% on bills" />
        <meta property="twitter:description" content="Say goodbye to high energy bills with solar panels. Electrawise can help you save up to 80% on your energy bill!" />
        <meta property="twitter:image" content="/meta-img.png" />
        {/* favicon */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" /> 
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        </Head>
        </>
    )
}