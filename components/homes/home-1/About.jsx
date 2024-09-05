"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/about-image.jpg"
              className="image-fullwidth relative"
              alt="Image Description"
            />
          </div>
          {/* End Image */}

        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h4 className="h5">Mission STATEMENT</h4>
        <p className="text-gr">
        It is the mission of M-TECH to provide quality services to oil And gas, petrochemicals companies 
        And industrial cities in Saudi Arabia and GCC. 
        Through our core values, we aim to compete with the top names in the industry while maintaining excellencein 
        service and standards.
        </p>
        <p className="text-gr">
        Through fiscal responsibility and ethical practices, M-TECH aims to offer high quality services and deliverables. 
        What separates us fromthe competition is the attention to detail & personal attention 
        that each client & each project receives.
        </p>
      </div>
    </div>
  );
}
