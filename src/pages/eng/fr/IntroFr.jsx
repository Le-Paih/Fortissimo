import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function IntroFr() {
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
        {/* Téléchargement et diffusion */}
        <div className="mt-20 flex flex-col-reverse md:flex-row">
          <div className="flex flex-1 flex-col py-5">
            <h1 className="text-4xl font-medium">
              Téléchargement & <span className="font-bold">Diffusion</span>
            </h1>
            <p className="mt-6 text-base tracking-wide">
              Les utilisateurs téléchargent leurs chansons ou leurs albums sur
              Fortissimo. Fortissimo distribue ensuite cette musique sur
              diverses plateformes de streaming telles que Spotify, Apple Music,
              Amazon Music, et bien plus encore.
              <br></br>
              <br></br>
              Cette étape permet de s&apos;assurer que la musique atteint un
              grand public à travers les différents plateformes de streaming.
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
        {/* Gestion des Redevances */}
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
              Gestions des <span className="font-bold">Redevances</span>
            </h1>
            <p className="mt-6 text-base tracking-wide">
              Fortissimo s&apos;occupe de la gestion des droits d&apos;auteur
              des artistes. Il s&apos;agit de suivre les streams et les
              téléchargements de leur musique sur différentes plateformes et de
              s&apos;assurer qu&apos;ils reçoivent leur juste part de
              redevances.
              <br></br>
              <br></br>
              Fortissimo fournit des analyses détaillées aux artistes afin
              qu&apos;ils puissent comprendre comment leur musique se vend et où
              se trouve leur public.
            </p>
          </div>
        </div>
        {/* Promotion et Outils de Marketing */}
        <div className="mt-10 flex flex-col-reverse md:mt-32 md:flex-row">
          <div className="flex flex-1 flex-col py-5">
            <h1 className="text-4xl font-medium">
              Promotion & <span className="font-bold">Outils de Marketing</span>
            </h1>
            <p className="mt-6 text-base tracking-wide ">
              Fortissimo propose des outils de promotion pour aider les artistes
              à atteindre un plus grand public. Ces outils comprennent des
              fonctions telles que la promotion sur les réseaux sociaux, les
              campagnes de marketing par courriel, et bien plus encore.
              <br></br>
              <br></br>
              En fournissant ces outils, nous donnons aux artistes les moyens de
              commercialiser efficacement leur musique et de développer leur
              public.
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

export default IntroFr;
