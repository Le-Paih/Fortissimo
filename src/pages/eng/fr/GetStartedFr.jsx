function GetStartedFr() {
  return (
    <section className="h-auto bg-[#714214] text-stone-100">
      <div className="px-4 py-20 text-center">
        <h1 className="text-5xl font-bold">
          Commencez À Vendre Votre Musique Dans Le{" "}
          <span
            className="
      bg-gradient-to-r from-stone-100 to-stone-100
      bg-no-repeat [background-position:0_110%]
      [background-size:0%_0.2em]
      hover:[background-size:100%_18%] focus:[background-size:100%_100%]
      motion-safe:transition-all
      motion-safe:duration-200
    "
          >
            Monde
          </span>{" "}
          Entier Dés Aujourd&apos;hui
        </h1>
        <p className="mt-10">
          Notre mission est de faire connaître votre musique au public que vous
          visez
        </p>
        <button className="mt-10 rounded-xl bg-stone-200 px-5 py-3 text-[#714214] transition-colors  duration-200 hover:bg-stone-100 active:bg-stone-100/90">
          Démarrer
        </button>
      </div>
    </section>
  );
}

export default GetStartedFr;
