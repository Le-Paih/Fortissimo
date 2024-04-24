import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Outro() {
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

  const exampleVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 25 },
  };

  return (
    <section className="h-auto bg-stone-200 pb-20 text-stone-700">
      <div className="flex flex-col px-10 text-center md:px-32 md:text-left">
        {/* Industry Experts */}
        <div className="mt-10 flex flex-col md:flex-row">
          <div className="flex flex-1 ">
            <motion.img
              src="/svg/speaker-svgrepo-com.svg"
              className="mx-auto h-56 w-56 md:h-72 md:w-72"
              variants={exampleVariant}
              initial="hidden"
              animate={control}
              ref={ref}
            />
          </div>
          <div className="flex flex-1 flex-col py-5">
            <h1 className="text-4xl font-medium">
              Industry <span className="font-bold">Experts</span>
            </h1>
            <p className="mt-6 text-base tracking-wide">
              Fortissimo collaborates with seasoned professionals, offering
              invaluable insights and strategies to help artists navigate the
              ever-evolving music landscape.
              <br></br>
              <br></br>
              With our expert guidance, you&apos;ll gain a competitive edge and
              chart a course for success in the industry.
            </p>
          </div>
        </div>
        {/* Trends & Earnings */}
        <div className="mt-10 flex flex-col-reverse md:mt-32 md:flex-row">
          <div className="p-y5 flex flex-1 flex-col">
            <h1 className="text-4xl font-medium">
              Trends & <span className="font-bold">Earnings</span>
            </h1>
            <p className="mt-6 text-base tracking-wide">
              Stay ahead of the curve with our comprehensive analysis of
              industry trends and earnings reports.
              <br></br>
              <br></br>
              Fortissimo provides real-time data and actionable insights,
              empowering artists to maximize their earnings and capitalize on
              emerging opportunities in the music market.
            </p>
          </div>
          <div className="flex flex-1 ">
            <motion.img
              src="/svg/insights-svgrepo-com.svg"
              className="mx-auto h-56 w-56 md:h-72 md:w-72"
              variants={exampleVariant}
              initial="hidden"
              animate={control2}
              ref={ref2}
            />
          </div>
        </div>
        {/* Get the App */}
        <div className="mt-10 flex flex-col md:mt-32 md:flex-row">
          <div className="flex flex-1">
            <motion.img
              src="/svg/music-note-slider-svgrepo-com.svg"
              className="mx-auto h-56 w-56 md:h-72 md:w-72"
              variants={exampleVariant}
              initial="hidden"
              animate={control3}
              ref={ref3}
            />
          </div>
          <div className="flex flex-1 flex-col py-5">
            <h1 className="text-4xl font-medium">
              Get the <span className="font-bold">Fortissimo App</span>
            </h1>
            <p className="mt-6 text-base tracking-wide ">
              Streamline your music distribution experience with our
              user-friendly app. Access powerful tools, track earnings on the
              go, and stay connected with your audience wherever you are.
              <br></br>
              <br></br>
              Download now and take control of your music career with
              Fortissimo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outro;
