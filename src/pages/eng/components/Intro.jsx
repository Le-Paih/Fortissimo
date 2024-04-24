import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Intro() {
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
      {/* <div className="pt-20">
        <h1 className="text-center text-5xl font-bold">How it works</h1>
      </div> */}

      <div className="flex flex-col px-10 text-center md:px-32 md:text-left">
        {/* Upload and Distribution */}
        <div className="mt-20 flex flex-col-reverse md:flex-row">
          <div className="flex flex-1 flex-col py-5">
            <h1 className="text-4xl font-medium">
              Upload & <span className="font-bold">Distribution</span>
            </h1>
            <p className="mt-6 text-base tracking-wide">
              Users upload their music tracks or albums to Fortissimo.
              Fortissimo then distributes this music to various digital music
              platforms such as Spotify, Apple Music, Amazon Music, and more.
              <br></br>
              <br></br>
              This step ensures that the music reaches a wide audience across
              different streaming services.
            </p>
          </div>
          <div className="flex flex-1">
            <motion.img
              src="/svg/upload-track-svgrepo-com.svg"
              className="mx-auto h-56 w-56 rounded-3xl md:h-72 md:w-72"
              variants={exampleVariant}
              initial="hidden"
              animate={control}
              ref={ref}
            />
          </div>
        </div>
        {/* Royalty Management */}
        <div className="mt-10 flex flex-col md:mt-32 md:flex-row">
          <div className="flex flex-1 ">
            <motion.img
              src="/svg/money-user-arrows-svgrepo-com.svg"
              className="mx-auto h-56 w-56 rounded-3xl md:h-72 md:w-72"
              variants={exampleVariant}
              initial="hidden"
              animate={control2}
              ref={ref2}
            />
          </div>
          <div className="flex flex-1 flex-col py-5">
            <h1 className="text-4xl font-medium">
              Royalty <span className="font-bold">Management</span>
            </h1>
            <p className="mt-6 text-base tracking-wide">
              Fortissimo handles royalty management for the artists. This
              involves tracking streams and downloads of their music across
              different platforms and ensuring that they receive their fair
              share of royalties.
              <br></br>
              <br></br>
              Fortissimo provides detailed analytics to artists so they can
              understand how their music is performing and where their audience
              is located.
            </p>
          </div>
        </div>
        {/* Promotion and Marketing Tools */}
        <div className="mt-10 flex flex-col-reverse md:mt-32 md:flex-row">
          <div className="flex flex-1 flex-col py-5">
            <h1 className="text-4xl font-medium">
              Promotion & <span className="font-bold">Marketing Tools</span>
            </h1>
            <p className="mt-6 text-base tracking-wide ">
              Fortissimo offers promotional tools to help artists reach a larger
              audience. This includes features such as playlist placement,
              social media promotion, email marketing campaigns, and more.
              <br></br>
              <br></br>
              By providing these tools, we empower artists to effectively market
              their music and grow their fan base.
            </p>
          </div>
          <div className="flex flex-1">
            <motion.img
              src="/svg/promotion-svgrepo-com.svg"
              className="mx-auto h-56 w-56 rounded-3xl md:h-72 md:w-72"
              variants={exampleVariant}
              initial="hidden"
              animate={control3}
              ref={ref3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
