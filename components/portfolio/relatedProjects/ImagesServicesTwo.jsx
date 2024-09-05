"use client";
import { portfolios13 } from "@/data/portfolio";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function ImagesServicesTwo() {
  return (
    <div className="container relative">

      <Gallery> 
        <ul className="works-grid work-grid-3 work-grid-gut hover-white work-grid-hover-alt">
          {portfolios13.slice(4, 7).map((item, index) => (
            <li key={index} className={"work-item   "}>
                <a className={"work-ext-link"}>
                  <Item
                    original={item.imgSrc}
                    thumbnail={item.imgSrc}
                    width={719}
                    height={461}
                  >
                    {({ ref, open }) => (
                      <>
                        <div onClick={open} className="work-img">
                          <div className="work-img-bg " />
                          <Image
                            width={719}
                            height={461}
                            ref={ref}
                            src={item.imgSrc}
                            alt={item.imgAlt}
                            data-wow-delay={item.delay}
                          />
                        </div>

                      </>
                    )}
                  </Item>
                </a>
  
            </li>
          ))}
        </ul>{" "}
      </Gallery>
    </div>
  );
}
