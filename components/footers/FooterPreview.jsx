import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function FooterPreview() {
  return (
    <div className="container">
      <div className="row pb-120 pb-sm-80 pb-xs-50">
        <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
          <Link href={"/"} className="mb-30">
            <Image
              src="/assets/images/logo-dark.svg"
              width={105}
              height={34}
              alt="Mtech Logo"
            />
          </Link>
          <p>
          Founded in 2013, M-TECH provides wide range of services that includes engineering, 
          procurement and execution to the oil and gas, petrochemicals and industrial cities.
          </p>
          <div className="clearlinks">
            <strong>T.</strong>
            <a href="tel:+18376528800">+966 13 831 1722</a>
          </div>
          <div className="clearlinks">
            <strong>E.</strong>
            <a href="mailto:ibthemes21@gmail.com">support@mtech.sa.com</a>
          </div>
        </div>
        <div className="col-md-7 offset-md-1 offset-lg-2">
          <div className="row mt-n30">
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Company</h3>
              <ul className="fw-menu clearlist">
                {navigationLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Social Media</h3>
              <ul className="fw-menu clearlist">
                <FooterSocials />
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Legal &amp; Press</h3>
              <ul className="fw-menu clearlist">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.path}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="row text-black">
        <div className="col-md-4 col-lg-3">
          <b>© {new Date().getFullYear()} All rights reserved.</b>
        </div>
        <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
          <b>AL MAWARED Advance Tech Co. LTD</b>
          {/* Back to Top Link */}
          <div className="local-scroll float-end mt-n20 mt-sm-10">
            <a href="#top" className="link-to-top">
              <i className="mi-arrow-up size-24" />
              <span className="visually-hidden">Scroll to top</span>
            </a>
          </div>
          {/* End Back to Top Link */}
        </div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
