import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";
import Footer5 from "@/components/footers/Footer5";
import ImagesServicesThree from "@/components/portfolio/relatedProjects/ImagesServicesThree";

export const metadata = {
  title:
    "Service 03 - Equipment || ",
  description:
    "",
};
export default function Equipment() {

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
                    "url(/assets/images/full-width-images/section-bg-4.jpg)",
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
                              Equipment
                            </span>
                          </h1>

                          <p>
                            Services Page 03
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

                            <h4>
                            DUMP TRUCKS FLEET
                            </h4>
                            <p className="lead">
                            M-TECH and its affiliates have number of dump trucks that can supportconstruction & civil projects. 
                            <br />
                            M-TECH professional team can manage the client requirements during 
                            the projects with approved drivers controlling the time and assuring the specification and quality.
                            </p>
                          <hr />
                          <h4>
                          EQUIPMENTS RENTAL
                          </h4>
                        </div>
                      </div>
                      </div>
                      <ImagesServicesThree />

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
