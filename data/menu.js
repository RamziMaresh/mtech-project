import Link from "next/link";


export const menuItems = [
  {
    title: "Home",
    Link: "/", 

  },


  {
    title: "Services",
    subItems: [

      {
        title: "Industrial & Mechanical Services",
        Link: "/industrial-services", 

      },
      {
        title: "Construction & Civil",
        Link: "/construction-civil", 
      },
      {
        title: "Equipment",
        Link: "/equipment", 


      },
    ],
  },
  {
    title: "Projects History",
    Link:"/projects-history"
  },


  {
    title: "Contact Us",
    Link:"/contact",
  },
];


{/*

export const allHomes = [
  {
    title: "Main",
    links: [
      {
        title: "Main Demo",
        links: [
          { href: "/main-one-page", text: "One Page" },
          { href: "/main-one-page-dark", text: "One Page Dark" },
          { href: "/main-multi-page", text: "Multi Page" },
          { href: "/main-multi-page-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "Typed Text",
        links: [
          { href: "/main-one-page-typed-text", text: "One Page" },
          { href: "/main-one-page-typed-text-dark", text: "One Page Dark" },
          { href: "/main-multi-page-typed-text", text: "Multi Page" },
          { href: "/main-multi-page-typed-text-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "Image Parallax",
        links: [
          { href: "/main-one-page-image-parallax", text: "One Page" },
          { href: "/main-one-page-image-parallax-dark", text: "One Page Dark" },
          { href: "/main-multi-page-image-parallax", text: "Multi Page" },
          {
            href: "/main-multi-page-image-parallax-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "Slider Fullscreen",
        links: [
          { href: "/main-one-page-slider-fullscreen", text: "One Page" },
          {
            href: "/main-one-page-slider-fullscreen-dark",
            text: "One Page Dark",
          },
          { href: "/main-multi-page-slider-fullscreen", text: "Multi Page" },
          {
            href: "/main-multi-page-slider-fullscreen-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "Slider Background",
        links: [
          { href: "/main-one-page-slider-background", text: "One Page" },
          {
            href: "/main-one-page-slider-background-dark",
            text: "One Page Dark",
          },
          { href: "/main-multi-page-slider-background", text: "Multi Page" },
          {
            href: "/main-multi-page-slider-background-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "BG Video HTML5",
        links: [
          { href: "/main-one-page-bg-video", text: "One Page" },
          { href: "/main-one-page-bg-video-dark", text: "One Page Dark" },
          { href: "/main-multi-page-bg-video", text: "Multi Page" },
          { href: "/main-multi-page-bg-video-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "BG Video Youtube",
        links: [
          { href: "/main-one-page-bg-video-youtube", text: "One Page" },
          {
            href: "/main-one-page-bg-video-youtube-dark",
            text: "One Page Dark",
          },
          { href: "/main-multi-page-bg-video-youtube", text: "Multi Page" },
          {
            href: "/main-multi-page-bg-video-youtube-dark",
            text: "Multi Page Dark",
          },
        ],
      },
    ],
  },
  {
    title: "Bold",
    links: [
      {
        title: "Main Demo",
        links: [
          { href: "/bold-one-page", text: "One Page" },
          { href: "/bold-one-page-dark", text: "One Page Dark" },
          { href: "/bold-multi-page", text: "Multi Page" },
          { href: "/bold-multi-page-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "Typed Text",
        links: [
          { href: "/bold-one-page-typed-text", text: "One Page" },
          { href: "/bold-one-page-typed-text-dark", text: "One Page Dark" },
          { href: "/bold-multi-page-typed-text", text: "Multi Page" },
          { href: "/bold-multi-page-typed-text-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "BG Video",
        links: [
          { href: "/bold-one-page-bg-video", text: "One Page" },
          { href: "/bold-one-page-bg-video-dark", text: "One Page Dark" },
          { href: "/bold-multi-page-bg-video", text: "Multi Page" },
          { href: "/bold-multi-page-bg-video-dark", text: "Multi Page Dark" },
        ],
      },
    ],
  },

  {
    title: "Corporate",
    links: [
      {
        title: "Main Demo",
        links: [
          { href: "/corporate-one-page", text: "One Page" },
          { href: "/corporate-one-page-dark", text: "One Page Dark" },
          { href: "/corporate-multi-page", text: "Multi Page" },
          { href: "/corporate-multi-page-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "Image Parallax",
        links: [
          { href: "/corporate-one-page-image-parallax", text: "One Page" },
          {
            href: "/corporate-one-page-image-parallax-dark",
            text: "One Page Dark",
          },
          { href: "/corporate-multi-page-image-parallax", text: "Multi Page" },
          {
            href: "/corporate-multi-page-image-parallax-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "BG Video",
        links: [
          { href: "/corporate-one-page-bg-video", text: "One Page" },
          { href: "/corporate-one-page-bg-video-dark", text: "One Page Dark" },
          { href: "/corporate-multi-page-bg-video", text: "Multi Page" },
          {
            href: "/corporate-multi-page-bg-video-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "Split Screen",
        links: [
          { href: "/corporate-one-page-split", text: "One Page" },
          { href: "/corporate-one-page-split-dark", text: "One Page Dark" },
          { href: "/corporate-multi-page-split", text: "Multi Page" },
          { href: "/corporate-multi-page-split-dark", text: "Multi Page Dark" },
        ],
      },
    ],
  },
  {
    title: "Elegant",
    links: [
      {
        title: "Main Demo",
        links: [
          { href: "/elegant-one-page", text: "One Page" },
          { href: "/elegant-one-page-dark", text: "One Page Dark" },
          { href: "/elegant-multi-page", text: "Multi Page" },
          { href: "/elegant-multi-page-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "BG Video",
        links: [
          { href: "/elegant-one-page-bg-video", text: "One Page" },
          { href: "/elegant-one-page-bg-video-dark", text: "One Page Dark" },
          { href: "/elegant-multi-page-bg-video", text: "Multi Page" },
          {
            href: "/elegant-multi-page-bg-video-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "Split Screen",
        links: [
          { href: "/elegant-one-page-split", text: "One Page" },
          { href: "/elegant-one-page-split-dark", text: "One Page Dark" },
          { href: "/elegant-multi-page-split", text: "Multi Page" },
          { href: "/elegant-multi-page-split-dark", text: "Multi Page Dark" },
        ],
      },
    ],
  },
  {
    title: "Fancy",
    links: [
      {
        title: "Main Demo",
        links: [
          { href: "/fancy-one-page", text: "One Page" },
          { href: "/fancy-one-page-dark", text: "One Page Dark" },
          { href: "/fancy-multi-page", text: "Multi Page" },
          { href: "/fancy-multi-page-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "Image Parallax",
        links: [
          { href: "/fancy-one-page-image-parallax", text: "One Page" },
          {
            href: "/fancy-one-page-image-parallax-dark",
            text: "One Page Dark",
          },
          { href: "/fancy-multi-page-image-parallax", text: "Multi Page" },
          {
            href: "/fancy-multi-page-image-parallax-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "BG Video",
        links: [
          { href: "/fancy-one-page-bg-video", text: "One Page" },
          { href: "/fancy-one-page-bg-video-dark", text: "One Page Dark" },
          { href: "/fancy-multi-page-bg-video", text: "Multi Page" },
          { href: "/fancy-multi-page-bg-video-dark", text: "Multi Page Dark" },
        ],
      },
    ],
  },
  {
    title: "Gradient",
    links: [
      {
        title: "Main Demo",
        links: [
          { href: "/gradient-one-page", text: "One Page" },
          { href: "/gradient-one-page-dark", text: "One Page Dark" },
          { href: "/gradient-multi-page", text: "Multi Page" },
          { href: "/gradient-multi-page-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "Image Parallax 1",
        links: [
          { href: "/gradient-one-page-image-parallax-1", text: "One Page" },
          {
            href: "/gradient-one-page-image-parallax-1-dark",
            text: "One Page Dark",
          },
          { href: "/gradient-multi-page-image-parallax-1", text: "Multi Page" },
          {
            href: "/gradient-multi-page-image-parallax-1-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "Image Parallax 2",
        links: [
          { href: "/gradient-one-page-image-parallax-2", text: "One Page" },
          {
            href: "/gradient-one-page-image-parallax-2-dark",
            text: "One Page Dark",
          },
          { href: "/gradient-multi-page-image-parallax-2", text: "Multi Page" },
          {
            href: "/gradient-multi-page-image-parallax-2-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "BG Video",
        links: [
          { href: "/gradient-one-page-bg-video", text: "One Page" },
          { href: "/gradient-one-page-bg-video-dark", text: "One Page Dark" },
          { href: "/gradient-multi-page-bg-video", text: "Multi Page" },
          {
            href: "/gradient-multi-page-bg-video-dark",
            text: "Multi Page Dark",
          },
        ],
      },
    ],
  },
  {
    title: "Modern",
    links: [
      {
        title: "Main Demo",
        links: [
          { href: "/modern-one-page", text: "One Page" },
          { href: "/modern-one-page-dark", text: "One Page Dark" },
          { href: "/modern-multi-page", text: "Multi Page" },
          { href: "/modern-multi-page-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "Image Parallax 1",
        links: [
          { href: "/modern-one-page-image-parallax-1", text: "One Page" },
          {
            href: "/modern-one-page-image-parallax-1-dark",
            text: "One Page Dark",
          },
          { href: "/modern-multi-page-image-parallax-1", text: "Multi Page" },
          {
            href: "/modern-multi-page-image-parallax-1-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "Image Parallax 2",
        links: [
          { href: "/modern-one-page-image-parallax-2", text: "One Page" },
          {
            href: "/modern-one-page-image-parallax-2-dark",
            text: "One Page Dark",
          },
          { href: "/modern-multi-page-image-parallax-2", text: "Multi Page" },
          {
            href: "/modern-multi-page-image-parallax-2-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "Typed Text",
        links: [
          { href: "/modern-one-page-typed-text", text: "One Page" },
          { href: "/modern-one-page-typed-text-dark", text: "One Page Dark" },
          { href: "/modern-multi-page-typed-text", text: "Multi Page" },
          {
            href: "/modern-multi-page-typed-text-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "BG Video",
        links: [
          { href: "/modern-one-page-bg-video", text: "One Page" },
          { href: "/modern-one-page-bg-video-dark", text: "One Page Dark" },
          { href: "/modern-multi-page-bg-video", text: "Multi Page" },
          { href: "/modern-multi-page-bg-video-dark", text: "Multi Page Dark" },
        ],
      },
    ],
  },
  {
    title: "Slick",
    links: [
      {
        title: "Main Demo",
        links: [
          { href: "/slick-one-page", text: "One Page" },
          { href: "/slick-one-page-dark", text: "One Page Dark" },
          { href: "/slick-multi-page", text: "Multi Page" },
          { href: "/slick-multi-page-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "Split Screen",
        links: [
          { href: "/slick-one-page-split", text: "One Page" },
          { href: "/slick-one-page-split-dark", text: "One Page Dark" },
          { href: "/slick-multi-page-split", text: "Multi Page" },
          { href: "/slick-multi-page-split-dark", text: "Multi Page Dark" },
        ],
      },
    ],
  },
  {
    title: "Strong",
    links: [
      {
        title: "Main Demo",
        links: [
          { href: "/strong-one-page", text: "One Page" },
          { href: "/strong-one-page-dark", text: "One Page Dark" },
          { href: "/strong-multi-page", text: "Multi Page" },
          { href: "/strong-multi-page-dark", text: "Multi Page Dark" },
        ],
      },
      {
        title: "Image Parallax",
        links: [
          { href: "/strong-one-page-image-parallax", text: "One Page" },
          {
            href: "/strong-one-page-image-parallax-dark",
            text: "One Page Dark",
          },
          { href: "/strong-multi-page-image-parallax", text: "Multi Page" },
          {
            href: "/strong-multi-page-image-parallax-dark",
            text: "Multi Page Dark",
          },
        ],
      },
      {
        title: "BG Video",
        links: [
          { href: "/strong-one-page-bg-video", text: "One Page" },
          { href: "/strong-one-page-bg-video-dark", text: "One Page Dark" },
          { href: "/strong-multi-page-bg-video", text: "Multi Page" },
          { href: "/strong-multi-page-bg-video-dark", text: "Multi Page Dark" },
        ],
      },
    ],
  },
];
 */}