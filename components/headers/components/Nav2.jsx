"use client";

import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
//
export default function Nav2({ links }) {
  const [menuOpen, setMenuOpen] = useState([-1, -1]);

  const toggleParent1 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[0] == i) {
      tempMenuOpen[0] = -1;
    } else {
      tempMenuOpen[0] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const toggleParent2 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[1] == i) {
      tempMenuOpen[1] = -1;
    } else {
      tempMenuOpen[1] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const pathname = usePathname();
  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();
    // window.addEventListener("scroll", addScrollspy);

    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      // window.removeEventListener("scroll", addScrollspy);
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);

  return (
    <>
      {links.slice(0,0).map((item, index) => (
        <li className={menuOpen[0] == index ? "js-opened" : ""} key={index}>
          <a
            href={item.Link}
            onClick={() => toggleParent1(index)}
            className="mn-has-sub"
          >
            {item.title}
          </a>

        </li>
      ))}
      {/* End Item With Sub */}
      {/* Item With Sub one*/}
      {links.slice().map((item, index) => (
        <li className={menuOpen[0] == index + 3 ? "js-opened" : ""} key={index}>
          <a
            onClick={() => toggleParent1(index + 3)}
            href={item.Link}
            className="mn-has-sub"
          >
            {item.title} 
          </a>
          {item.subItems && (
            <ul
              className={`mn-sub  ${
                menuOpen[0] == index + 3 ? "mobile-sub-active" : ""
              } `}
            >
              {item.subItems.map((subItem, subIndex) => (
                <li
                  className={menuOpen[1] == subIndex ? "js-opened" : ""}
                  key={subIndex}
                >
                  <a href={subItem.Link}
                  onClick={() => toggleParent2(subIndex)} 
                  className="mn-has-sub"
                  >
                    {subItem.title} <i className="mi-chevron-right right" />
                  </a>



                  {subItem.links && (
                    <ul
                      className={`mn-sub  ${
                        menuOpen[1] == subIndex ? "mobile-sub-active" : ""
                      } `}
                    >
                      {subItem.item.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={subItem.link} 
                            >
                            {subItem.Link} 
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}
