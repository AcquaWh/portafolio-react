import React from "react";
import { GlobalProvider } from "./src/context/GlobalContext";
import Layout from "./src/components/Layout";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <script
      key="gtm-script"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNZP5VK9');`,
      }}
    />,
  ]);
  setPreBodyComponents([
    <noscript key="gtm-noscript">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KNZP5VK9"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>,
  ]);
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);
