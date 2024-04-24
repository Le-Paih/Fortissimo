import DropLang from "../../../components/DropLang";

function HeroFr() {
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
            Augmentez le son de votre musique au niveau mondial !
          </h1>
          <h2 className="mt-6 text-center text-base md:text-left md:text-lg">
            Distribuez facilement votre musique sur Spotify, Apple Music, Amazon
            Music et d&apos;autres plateformes de streaming, et offrez à votre
            musique l&apos;audience mondiale qu&apos;elle mérite.
          </h2>
        </div>
      </div>
      <div className="flex w-auto">
        <button className="mx-auto mt-5 rounded-xl bg-stone-200 px-5 py-3 text-[#714214] transition-colors duration-150 hover:bg-stone-100 active:bg-stone-100/90 md:mx-0">
          Commencez votre publication
        </button>
      </div>
    </section>
  );
}

export default HeroFr;
