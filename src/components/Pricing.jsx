import { useEffect, useState } from 'react';
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { useMediaQuery } from 'react-responsive';

const Pricing = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className={`relative ${isDesktopOrLaptop ? 'justify-center mb-[6.5rem] lg:flex' : 'mb-4'}`}>
          {isDesktopOrLaptop && (
            <img
              src={smallSphere}
              className="relative z-1 max-w-full h-auto"
              width={255}
              height={255}
              alt="Sphere"
            />
          )}
          <div className={`absolute top-1/2 left-1/2 ${isDesktopOrLaptop ? 'w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none' : 'w-full -translate-x-1/2 -translate-y-1/2'}`}>
            <img
              src={stars}
              className="w-full max-w-full h-auto"
              width={isDesktopOrLaptop ? 950 : windowWidth - 40}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Looking to secure your spot?"
          title="RESERVATION DETAILS"
          className="text-black"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b text-black"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
