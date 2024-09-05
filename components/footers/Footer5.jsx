import { socialMediaLinks } from "@/data/footer";
import React from "react";

export default function Footer5() {
  return (
    <div className="container position-relative text-center pt-140 pb-80 pb-sm-50">
      {/* Scroll Up */}
      <div className="local-scroll link-to-top-2-wrap">
        <a href="#top" className="link-to-top-2">
          Back to top
        </a>
      </div>
      {/* End Scroll Up */}
      {/* Social Links */}
      <div className="footer-social-links mb-60">
        {socialMediaLinks.map((elm, i) => (
          <a
            href={elm.href}
            key={i}
            title="Facebook"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="visually-hidden">{elm.name}</span>
            <i className={elm.iconClass} />
          </a>
        ))}
      </div>
      {/* End Social Links */}
      {/* Footer Text */}
      <div className="footer-text">

        <div className="footer-made"> MAASI Business Center, Office No.10 4th Floor, Abdul Rahman Al Dakhil Street, Rakah.</div>
        <div className="footer-made"> Khobar 34226, Kingdom of Saudi Arabia.</div>
        <br />

                {/* Copyright */}
                <div>
            © {new Date().getFullYear()} All rights reserved. AL MAWARED Advance Tech Co. LTD
        </div>
        {/* End Copyright */}

      </div>
      {/* End Footer Text */}
    </div>
  );
}
