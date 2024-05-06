import Script from "next/script";

const GoogleAnalytics = () => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-4842W3RKZJ`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4842W3RKZJ');`}
    </Script>
  </>
);

export default GoogleAnalytics;
