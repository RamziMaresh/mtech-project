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
import RelatedProject10 from "@/components/portfolio/relatedProjects/RelatedProject10";
import Footer5 from "@/components/footers/Footer5";
import Link from "next/link";
import TableThree from "@/components/servicestable/TableThree";

export const metadata = {
  title:
  "Service 01 - Industrial & Mechanical Services || ",
  description:
    "",
};
export default function IndustrialMechanicalServices() {

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
                    "url(/assets/images/full-width-images/section-bg-12.jpg)",
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
                              Industrial & Mechanical Services
                            </span>
                          </h1>

                          <p>
                            Services Page 01
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
                      <div className="blog-item mb-0 mb-xs-40">
                        <div className="blog-item-body">
                          {/* Media Gallery */}


                          <h4>
                          Pressure Hydro - Test
                          </h4>
                          <p className="lead">
                          It is a high strength, field-applied composite system that is used forstructural reinforcement of 
                          damaged piping. It is a wet layup, fiber-reinforced polymer (FRP) 
                          system that consists of custom blended epoxyand unique fiber reinforcements tailored for piping repair.
                          <br/>
                          </p>
                          <p className="lead">
                          These products are suitablefor pipes with leaks or whichmay develop leaks. A broadline of unique 
                          epoxy matrixsystems and fabrics are available to handle a wide variety high heat applications, 
                          harsh chemicalenvironments, and coolinstallation temperatures.
                          </p>
                          <hr />

                          <h4>
                          Values Overhauling & Repair
                          </h4>
                          <p className="lead">
                          We are doing servicing of manytypes of Industrial Valves. withwell-equipped team andoutstanding expert work force, 
                          the unit provides both onsite andoffsite servicing activities whetherthe requirement is for one valve orfor 
                          a complete plant.
                          <br/>
                          </p>
                          <hr />

                          <h4>
                          Pressure Safety Valve - TREVI Test
                          </h4>
                          <p className="lead">
                          Online testing of steam relief safety valves. Aload cell is mounted with electronic DC motorpuller on 
                          the valves stem top. This pulls thestem thereby trying to lift the disc. 
                          The netresult is that the valve pops at a pressure setpressure less electronic pressure 
                          calculated onthe basis of disc area.
                          <br/>
                          </p>
                          <hr />

                          <h4>
                          Pressure Hydro - Test
                          </h4>
                          <p className="lead">
                          Fully pressure testing unit is designed toconduct the pressure test ON SITE & in house aswell. 
                          Suitable to test different types of hoses,pipes, cylinders, Etc. 
                          The system generates anautomatic test report and certificate indicatingthe parameters of the test.
                          <br/>
                          </p>

<hr />
                          <h4>
                          Technical Support And Manpower Supply
                          </h4>
                          <p className="lead">
                          We have supplied professional and experiencedengineers, skilled and semi-skilled techniciansand workers to 
                          companies and contractorsworldwide in the oil and gas and petrochemicalindustries especially 
                          from all line of our services.
                          <br/>
                          </p>
                          <hr />

                          <h4>
                          Manpower Categories
                          </h4  >
                          <p className="lead">
                          M-TECH is a reliable manpower source, where we cansupport our clients’ business in Saudi Arabia. 
                          M-TECH has an excellent history of supporting manyinternational, 
                          and local companies with qualified andskilled manpower whom able to achieve clients’exceptions.
                          <br/>
                          </p>
                          <hr />

                          <h4>
                          Below are samples of categories that M-TECH supplyingand supporting its clients with:
                          </h4>

                        </div>
                        <TableThree />

                      </div>
                      </div>
                      <RelatedProject10 />

                      </div>
                      </div>
</section>

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
