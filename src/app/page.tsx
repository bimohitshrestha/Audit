import About from "./about";
import Blog from "./blog";

import LearnMore from "./component/homesection/LearnMore";
import PremiumSection from "./component/homesection/PremiumSection";
import Testimonial from "./component/homesection/Testimonial";

import ServiceSection from "./service";
import Trust from "./trust";

export default function Home() {
  return (
    <>
      <div className="  ">
        <ServiceSection />
        <Trust />
        {/* <PremiumSection
          title="Looking for premium accounting for your business ?"
          cta="Get in touch"
        /> */}
        <About />
        <LearnMore />
        <Blog />
        <Testimonial />

        <PremiumSection
          title="Talk to our best accounting expert now"
          cta="Get in touch"
        />

        {/* <Contact /> */}
      </div>
    </>
  );
}
