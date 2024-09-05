import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";

import Facts from "@/components/homes/home-1/Facts";
import Features from "@/components/homes/home-1/Features";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
import ClientSlider from "@/components/others/ClientSlider";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className="page-section scrollSpysection"
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">About Us</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="AL MAWARED Advance Tech Co. LTD" />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
                <a
                  href="/assets/images/profilepdf/profilemtech.pdf"
                  target="_blank"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Download Company Profile{" "}
                    <i
                      className="mi-download size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Download Company Profile{" "}
                    <i
                      className="mi-download size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
            </div>
          </div>
          <About />
        </div>
      </section>


      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "
        }`}
        id="team"
      >
        <Team />
      </section>




      {/* End Our companies*/}
            
      {/* Start Our companies
      <section className="">
              <Brands />
            </section>*/}
      {/* End Our companies*/}
      

 

{/*
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        {" "}
        <Service />
      </section>
      */}






      {/* Start Certificates   */}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section>
            {/* End Certificates   */}




            <section
              className={`page-section pt-0 pb-0  ${
                dark ? "light-content" : ""
              }`}
            >
              {" "}
              {dark ? <Testimonials2 /> : <Testimonials />}
            </section>



            




      {/* Start Services Main*/}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Our Services</h2>
              <h3 className="section-title mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  MTech Services
                </span>
              </h3>
            </div>

          </div>
          <Blog />
        </div>
      </section>
      {/* End Main ervices*/}


            {/* Start Our clients*/}
            <section className="small-section pt-20 pb-100">
                <div className="container relative">
                  <div className="row wow fadeInUpShort">
                    
                    <div className="col-md-12">
                      <ClientSlider />
                    </div>
                  </div>
                </div>
              </section>
      {/* End Our clients*/}


      {/* 

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />{" "}
      </section>
      */}
    </>
  );
}
