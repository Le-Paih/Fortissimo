function Footer() {
  return (
    <section className="flex h-auto flex-col justify-between bg-stone-800 px-10 py-5 text-stone-100 md:flex-row">
      <div className="mx-auto flex flex-row md:mx-0">
        <img src="/svg/fortississimo-svgrepo-com.svg" className="h-7 w-7" />
        <p className="my-auto ml-3">
          Fortissimo © 2024{" "}
          <span className="text-sm">All rights reserved</span>
        </p>
      </div>
      <div className="mx-auto my-auto mt-3 flex w-full flex-row justify-between sm:w-5/12 md:mx-0 md:mt-0 md:w-2/6 lg:w-3/12">
        <p className="cursor-pointer hover:text-stone-400 active:text-stone-300">
          Terms of Service
        </p>
        <p className="cursor-pointer hover:text-stone-400 active:text-stone-300">
          Privacy Policy
        </p>
      </div>
    </section>
  );
}

export default Footer;
