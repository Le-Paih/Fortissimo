import ArtistCards from "../../../components/ArtistCards";

function Artists() {
  return (
    <section className="h-auto bg-stone-200">
      <div className="py-10 text-center">
        <h1 className="text-5xl font-bold text-stone-700">
          Some of{" "}
          <span
            className="bg-gradient-to-r from-stone-700 to-stone-700
      bg-no-repeat [background-position:0_110%]
      [background-size:0%_0.2em]
      hover:[background-size:100%_18%] focus:[background-size:100%_100%]
      motion-safe:transition-all
      motion-safe:duration-200"
          >
            Our Artists
          </span>
        </h1>
      </div>
      <div className="mt-5 h-auto ">
        <ArtistCards />
      </div>
    </section>
  );
}

export default Artists;
