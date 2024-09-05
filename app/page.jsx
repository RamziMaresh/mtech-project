import { menuItems } from "@/data/menu";
import Header1Multipage from "@/components/headers/Header1Multipage";
import FooterPreview from "@/components/footers/FooterPreview";
import Home1 from "@/components/homes/home-1";
import Hero4 from "@/components/homes/home-1/heros/Hero4";

import Footer5 from "@/components/footers/Footer5";

export const metadata = {
  title:
    "Home Page || MTech",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Navigation Panel */}
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          {/* End Navigation Panel */}
          <main id="main">
            <Hero4 />
            <Home1 />
          </main>
          {/* Footer */}
          <footer className="page-section footer bg-gray-light-0 pb-10">
            <Footer5 />
          </footer>
          {/* End Footer */}
        </div>
      </div>
    </>
  );
}
