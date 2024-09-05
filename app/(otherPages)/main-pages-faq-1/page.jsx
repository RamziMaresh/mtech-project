
import dynamic from "next/dynamic";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";

import React from "react";
import { menuItems } from "@/data/menu";
import { faqDataMain } from "@/data/faqs";
import Footer5 from "@/components/footers/Footer5";

export const metadata = {
  title:
    "Main About 1 || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
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
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/page-title-bg-3.jpg)",
                }}
              >
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
                            FAQ
                          </h2>
                          <h1 className="hs-title-1 mb-0">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Frequently Asked Questions" />
                            </span>
                          </h1>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </>
              </ParallaxContainer>
            </section>
            <>
              <section className="page-section pt-0">
                <div className="container relative wow fadeInUp">
                  <div className="row mb-30">
                    <div className="col-md-8 offset-md-2">
                      {/* Search */}
                      <div className="form">
                        <div className="search-wrap">
                          <input
                            type="text"
                            className="form-control input-lg search-field round"
                            placeholder="Search..."
                          />
                          <button
                            className="search-button animate"
                            type="submit"
                            title="Start search"
                          >
                            <i className="mi-search size-18" />
                            <span className="visually-hidden">
                              Start search
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* End Search */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      {faqDataMain.map((elm, i) => (
                        <React.Fragment key={i}>
                          <hr className="mb-30" />
                          <h4 className="mb-20">{elm.question}</h4>
                          <p>{elm.answer}</p>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}

            </>
          </main>

                    {/* Footer */}
                    <footer className="page-section footer bg-gray-light-0 pb-10">
            <Footer5 />
          </footer>
          {/* End Footer */}


        </div>{" "}
      </div>
    </>
  );
}
