import DropLang from "../../../components/DropLang";

function Hero() {
  return (
    <section
      className=" h-auto bg-cover bg-center p-4 pb-28 md:p-14"
      style={{ backgroundImage: `url('/Studio-hero.jpg')` }}
    >
      <div className="flex h-auto flex-row justify-between">
        <img src="/svg/fortississimo-svgrepo-com.svg" className="h-14 w-14" />
        <DropLang />
      </div>
      <div>
        <div className="mt-20 text-stone-100 md:mt-20 md:w-2/3">
          <h2 className="text-center italic md:text-left md:text-lg">
            Fortissimo distribution
          </h2>
          <h1 className="mt-8 text-center text-4xl font-medium md:text-left md:text-5xl">
            Turn Up Your Music&apos;s Volume on the World Stage!
          </h1>
          <h2 className="mt-6 text-center text-base md:text-left md:text-lg">
            Easily distribute your music to Spotify, Apple Music, Amazon Music,
            and other leading platforms, giving your art the global audience it
            deserves.
          </h2>
        </div>
      </div>
      <div className="flex w-auto">
        <button className="mx-auto mt-5 rounded-xl bg-stone-200 px-5 py-3 text-[#714214] transition-colors duration-150 hover:bg-stone-100 active:bg-stone-100/90 md:mx-0">
          Start your release
        </button>
      </div>
    </section>
  );
}

export default Hero;

{
  /* <motion.div 
        variants={{
          hidden: {left: 0},
          visible: {left: "100%"}
        }}
        initial="hidden"
        animate={slideControls}
        transition={{duration: 0.5, ease: "easeIn"}}
        className="absolute top-4 bottom-0 left-0 right-0 bg-[#714214] z-20"
        /> */
}
