
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";

import React from "react";

import { menuItems } from "@/data/menu";
import Contact2 from "@/components/homes/home-1/Contact2";
import Footer5 from "@/components/footers/Footer5";

const dark = false;
export const metadata = {
  title:
    "Contact Us || MTech",
  description:
    "",
};
export default function MainAboutPage1() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <div
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/page-title-bg-4.jpg)",
                }}
              >
                <>
                  <>
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                    <div className="container position-relative pt-50">
                      {/* Section Content */}
                      <div className="text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-md-8 offset-md-2">
                            <h2
                              className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                              data-wow-duration="1.2s"
                            >
                              Contact Us
                            </h2>
                            <h1 className="hs-title-1 mb-0">
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                              >
                                Say hello and let’s start the productive work
                              </span>
                            </h1>
                          </div>
                          {/* End Page Title */}
                        </div>
                      </div>
                      {/* End Section Content */}
                    </div>
                  </>
                </>
              </div>
            </section>
            <>
              {/* Contact Section */}
              <section className="page-section pt-0" id="contact">
                <Contact2 />
              </section>
              {/* End Contact Section */}
  
         
            </>
          </main>
          <footer className="page-section footer bg-gray-light-0 pb-10">
            <Footer5 />
          </footer>
                  </div>{" "}
      </div>
    </>
  );
}
