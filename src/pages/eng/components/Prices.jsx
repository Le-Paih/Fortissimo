import PricingCard from "./PricingCard";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Prices() {
  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    }
  }, [control2, inView2]);

  useEffect(() => {
    if (inView3) {
      control3.start("visible");
    }
  }, [control3, inView3]);

  const variant1 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.25 } },
    hidden: { opacity: 0, y: 25 },
  };
  const variant2 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    hidden: { opacity: 0, y: 25 },
  };
  const variant3 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.75 } },
    hidden: { opacity: 0, y: 25 },
  };

  return (
    <section className="h-auto bg-stone-200">
      <div className="py-16 text-center">
        <h1 className="text-5xl font-bold text-stone-700">
          Plans for{" "}
          <span
            className="
      bg-gradient-to-r from-stone-700 to-stone-700
      bg-no-repeat [background-position:0_110%]
      [background-size:0%_0.2em]
      hover:[background-size:100%_18%] focus:[background-size:100%_100%]
      motion-safe:transition-all
      motion-safe:duration-200
    "
          >
            every artist
          </span>
        </h1>
        {/* Cards */}
        <div className="flex flex-col justify-center md:flex-row">
          {/* First card */}
          <motion.div
            ref={ref}
            initial="hidden"
            variants={variant1}
            animate={control}
          >
            <PricingCard
              bar="purple"
              iconSrc="/svg/artist-svgrepo-com.svg"
              title="Starter"
              description="Free distribution with no hidden costs"
            />
          </motion.div>
          {/* Second card */}
          <motion.div
            ref={ref2}
            initial="hidden"
            variants={variant2}
            animate={control2}
          >
            <PricingCard
              bar="yellow"
              iconSrc="/svg/headphones-svgrepo-com.svg"
              title="Pro"
              description="Perfect for an artist with a solid fanbase"
            />
          </motion.div>
          {/* Third card */}
          <motion.div
            ref={ref3}
            initial="hidden"
            variants={variant3}
            animate={control3}
          >
            <PricingCard
              bar="green"
              iconSrc="/svg/album-svgrepo-com.svg"
              title="All Access"
              description="The perfect choice for a proffesional music label"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
