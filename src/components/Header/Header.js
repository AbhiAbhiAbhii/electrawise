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
        </Head>
        </>
    )
}