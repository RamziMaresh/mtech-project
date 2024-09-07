import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import Content1 from "@/components/blog/content/Content1";
import { menuItems,  } from "@/data/menu";
import Footer5 from "@/components/footers/Footer5";
import TableOne from "@/components/servicestable/tableone";
import TableTwo from "@/components/servicestable/TableTwo";


export const metadata = {
  title:
    "Projects History || ",
  description:
    "",
};

export default function ProjectHistory() {
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
                className="page-section bg-gray-light-1 bg-light-alpha-80 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Projects History" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              Discovering our services insights and
                              inspiration.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </div>
            </section>
            <>
              {/* Section 
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <Content1 />
                    </div>
                  </div>
                </div>
              </section>
              */}
              {/* End Section */}


                              {/* Section */}
                              <section className="page-section">
                    {/* Section */}
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="">
                      {/* Post */}
                      <div className="blog-item mb-1 mb-xs-40">
                        <div className="blog-im-body">

                         <h4>CIVIL & CONSTRUCTION</h4>
                          <hr />
                          </div>
                          </div>
                          <TableOne/>


                          <div className="blog-im-body">
                          <h4>MECH & REPAIRING</h4>
                          <hr />
                          </div>
                          </div>
                          <TableTwo/>

                          </div>
                          
                          </div>
                          </section>





              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row mt-n60">
                    <div className="col-sm-6 col-lg-3 mt-60">
                      {/* Widget */}
                      <div className="widget mb-0">
                        <h3 className="widget-title">Our Main Services</h3>
                        <div className="widget-body">
                          <ul className="clearlist widget-menu">
                            {categories.map((category) => (
                              <li key={category.id}>
                                <a href={category.Link} title="">
                                  {category.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* End Widget */}
                    </div>
                    <div className="col-sm-6 col-lg-3 mt-60">
                      {/* Widget */}
                      <div className="widget mb-0">
                        <h3 className="widget-title">Tags</h3>
                        <div className="widget-body">
                          <div className="tags">
                            {tags.map((tag) => (
                              <a href={tag.Link}  key={tag.id}>
                                {tag.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* End Widget */}
                    </div>
                    <div className="col-sm-6 col-lg-3 mt-60">

                    </div>
                    <div className="col-sm-6 col-lg-3 mt-60">
                      {/* Widget */}
                      <div className="widget mb-0">
                        <h3 className="widget-title">MTech Intro</h3>
                        <div className="widget-body">
                          <div className="widget-text clearfix">
                          Founded in 2013, M-TECH provides wide range of services that includes engineering, 
                          procurement and execution to the oil & gas, petrochemicals & industrial cities.

                          </div>
                        </div>
                      </div>
                      {/* End Widget */}
                    </div>
                  </div>
                </div>
              </section>
              {/* End Section */}
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
