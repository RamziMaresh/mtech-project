import React from "react";
import Image from "next/image";
export default function Brands() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h2 className="section-title-tiny mb-30">
             Our Companies
          </h2>

          <div className="logo-grid mb-60">
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/clients-logos/logo-grid/logo-1.png"
              width="250"
              height="33"
              alt="Mtech-companies"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
