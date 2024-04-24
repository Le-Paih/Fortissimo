import ArtistCard from "./ArtistCard";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function ArtistCards() {
  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

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

  useEffect(() => {
    if (inView4) {
      control4.start("visible");
    }
  }, [control4, inView4]);

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
  const variant4 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
    hidden: { opacity: 0, y: 25 },
  };

  return (
    <div className="flex flex-col justify-between px-20 pb-20 md:flex-row">
      <motion.div
        ref={ref}
        initial="hidden"
        variants={variant1}
        animate={control}
      >
        <ArtistCard img="/Artists/SDM.jpg" name="SDM" />
      </motion.div>
      <motion.div
        ref={ref2}
        initial="hidden"
        variants={variant2}
        animate={control2}
      >
        <ArtistCard img="/Artists/Tiakola.jpg" name="Tiakola" />
      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        variants={variant3}
        animate={control3}
      >
        <ArtistCard img="/Artists/Ninho.jpg" name="Ninho" />
      </motion.div>
      <motion.div
        ref={ref4}
        initial="hidden"
        variants={variant4}
        animate={control4}
      >
        <ArtistCard img="/Artists/JHus.jpg" name="J Hus" />
      </motion.div>
    </div>
  );
}

export default ArtistCards;
