"use client";
import React from "react";

import {
  Copyright,
  Footer as MerchFooter,
  PrivacyIcon,
} from "@costco/merch-ui-components";
const Footer = () => {

  return (
    <>
      <MerchFooter id="footer" menu=   {[
        {
          href: './site-map',
          id: 'site-map',
          label: 'Site Map'
        },
        {
          href: 'https://mobilecontent.costco.com/live/resource/img/static-legal/VendorPortal_Ts-C.pdf',
          id: 'terms-conditions',
          label: 'Terms & Conditions',
          openInNewTab: true
        },
        {
          href: 'https://www.costco.com/privacy-policy.html',
          id: 'privacy-rights',
          label: 'Your Privacy Rights',
          openInNewTab: true
        },
        {
          href: 'https://www.costco.com/privacy-policy.html#cppa',
          id: 'ca-notice',
          label: 'CA Notice',
          openInNewTab: true
        },
        {
          action: function Js(){},
          id: 'cookie-settings',
          label: 'Cookie Settings'
        },
        {
          href: 'https://www.costco.com/DNSMIView',
          icon: <PrivacyIcon />,
          id: 'your-privacy-choices',
          label: 'Your Privacy Choices',
          openInNewTab: true
        }
      ]}>
        <Copyright id="copyright">{"footer.copyright"}</Copyright>
      </MerchFooter>
    </>
  );
};

export default Footer;
