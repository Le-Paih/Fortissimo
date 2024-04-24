function FooterFr() {
  return (
    <section className="flex h-auto flex-col justify-between bg-stone-800 px-10 py-5 text-stone-100 md:flex-row">
      <div className="mx-auto flex flex-row md:mx-0">
        <img src="/svg/fortississimo-svgrepo-com.svg" className="h-7 w-7" />
        <p className="my-auto ml-3">
          Fortissimo © 2024{" "}
          <span className="text-sm">Tous droits réservés</span>
        </p>
      </div>
      <div className="mx-auto my-auto mt-3 flex w-full flex-row justify-between sm:w-8/12 md:mx-0 md:mt-0 md:w-6/12 lg:w-5/12">
        <p className="cursor-pointer hover:text-stone-400 active:text-stone-300">
          Conditions D&apos;utilisation
        </p>
        <p className="cursor-pointer hover:text-stone-400 active:text-stone-300">
          Politique de Confidentialité
        </p>
      </div>
    </section>
  );
}

export default FooterFr;
