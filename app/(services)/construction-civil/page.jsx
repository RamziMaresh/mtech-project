import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import { allPortfolios } from "@/data/portfolio";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems } from "@/data/menu";
import Footer5 from "@/components/footers/Footer5";
import ImagesServicesTwo from "@/components/portfolio/relatedProjects/ImagesServicesTwo";
import Link from "next/link";
import ImagesServicesOne from "@/components/portfolio/relatedProjects/ImagesServicesOne";
export const metadata = {
  title:
    "Service 02 - Construction|| ",
  description:
    "",
};
export default function ConstructionCivil() {

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <div
                className="home-section bg-dark-1 bg-dark-alpha-30 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-13.jpg)",
                }}
              >
                <>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-dark opacity-07" />
                  <div className="container position-relative min-height-100vh d-flex align-items-center pt-100 pb-100">
                    {/* Section Content */}
                    <div className="home-content text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <div className="mb-20">
                            <a
                              href="/"
                              className="btn btn-mod btn-small btn-border-w btn-circle"
                              data-btn-animate="y"
                            >
                              <i className="mi-arrow-left align-center size-18" />{" "}
                              Back to Home
                            </a>
                          </div>
                          <h1 className="hs-title-1 mb-20">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              Construction & Civil
                            </span>
                          </h1>
                          <p>
                            Services Page 02
                          </p>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                    {/* Scroll Down */}
                    <div
                      className="local-scroll scroll-down-wrap wow fadeInUp"
                      data-wow-offset={0}
                    >
                      <a href="#start" className="scroll-down">
                        <i className="mi-chevron-down" />
                        <span className="visually-hidden">
                          Scroll to the next section
                        </span>
                      </a>
                    </div>
                    {/* End Scroll Down */}
                  </div>
                </>
              </div>
            </section>
            <>
              <>


           


                {/* Section */}
                <section className="page-section" id="start">
                    {/* Section */}
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="col-lg-8 offset-lg-2">
                      {/* Post */}
                      <div className="blog-item mb-80 mb-xs-40">





                        <div className="blog-item-body">

                         <h5>
                          M-TECH has successfully completed number of civil contracts on variousprojects meeting the client targets, specification,
                           and expectation. <br /> <br /> M-TECH -with its experienced & competent team- has the ability to manageand run 
                           different sizes of construction & civil projects.
                          </h5>

                          <hr />

                          <h4>
                          Below is the construction & civil categories, that M-TECH focusing on:
                          </h4>

                          <ul>
                            <li>Constructionof Commercial Buildings & Facade.</li>
                            <li>Commercial Building Finishing & Renovation.</li>
                            <li>Constructionof Landscaping, Road & Pavement.</li>
                            <li>Train Bridges Repairing, Reinforcing & Maintenance.</li>
                            <li>Fencing, Security Guard Rooms& Related.</li>
                          </ul>

                          <ImagesServicesOne />

                          <hr />
                          <h4>
                          EPOXY APPLICATION
                          </h4>
                          <p className="lead">
                          M-TECH is an approved epoxy applicator, with trainedand skilled manpower under a supervision of experts. 
                          From high density epoxy flooring to low density, M-TECHcan provide a variety of selections based on the clientfunctions. 
                          M-TECH has the ability to provide technicalrecommendations through its international partner 
                          ITWPerformance Polymers in Italy.
                          <br/>
                          </p>
                          <ImagesServicesTwo />
                          <hr />


                        </div>
                      </div>
                      </div>

                      </div>
                      </div>

</section>
                {/* End Section */}

              </>

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
