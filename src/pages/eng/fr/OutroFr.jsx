import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function OutroFr() {
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
        {/* Experts de L'industrie */}
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
              Experts de <span className="font-bold">L&apos;industrie</span>
            </h1>
            <p className="mt-6 text-base tracking-wide">
              Fortissimo collabore avec des professionnels confirmés, offrant
              des des idées et des stratégies inestimables pour aider les
              artistes à naviguer le marché de la musique en pleine évolution.
              <br></br>
              <br></br>
              Grâce à nos conseils d&apos;experts, vous obtiendrez un avantage
              compétitif et tracerez la route du succès dans l&apos;industrie.
            </p>
          </div>
        </div>
        {/* Tendances & Revenus */}
        <div className="mt-10 flex flex-col-reverse md:mt-32 md:flex-row">
          <div className="p-y5 flex flex-1 flex-col">
            <h1 className="text-4xl font-medium">
              Tendances & <span className="font-bold">Revenus</span>
            </h1>
            <p className="mt-6 text-base tracking-wide">
              Gardez une longueur d&apos;avance grâce à notre analyse complète
              des tendances, du marché et des rapports sur les bénéfices.
              <br></br>
              <br></br>
              Fortissimo fournit des données en temps réel et des informations
              utiles, permettant aux artistes de maximiser leurs revenus et de
              profiter des opportunités émergentes du marché musical.
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
        {/* Télécharger L'application */}
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
              Télécharger{" "}
              <span className="font-bold">L&apos;application Fortissimo</span>
            </h1>
            <p className="mt-6 text-base tracking-wide ">
              Simplifiez votre expérience de distribution de musique avec notre
              application simple d&apos;utilisation. Accédez à des outils
              efficaces, suivez vos revenus en cours de route et restez en
              contact avec votre public où que vous soyez.
              <br></br>
              <br></br>
              Téléchargez maintenant et prenez le dessus sur votre carrière
              musicale avec Fortissimo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutroFr;
