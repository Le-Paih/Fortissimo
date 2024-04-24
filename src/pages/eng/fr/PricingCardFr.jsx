function PricingCardFr({ iconSrc, title, description, bar }) {
  const colorClasses = {
    purple: "bg-purple-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
  };

  return (
    <div className="bg-stone-[#f3f2f1] mx-auto mt-16 flex h-auto w-4/5 flex-col rounded-lg shadow-lg transition-all duration-200 hover:scale-105 sm:w-96 md:mx-4 md:w-56 lg:w-[19rem] xl:w-96 ">
      {/* Coloured Bar */}
      <span className={`${colorClasses[bar]} h-6 rounded-t-lg`}></span>
      {/* Icon */}
      <div className="flex h-auto justify-center">
        <img src={iconSrc} className=" my-6 h-24 w-24" alt={title} />
      </div>
      {/* Title */}
      <h3 className="my-4 text-4xl font-bold text-stone-700">{title}</h3>
      {/* Description */}
      <p className="font-base text-md my-4 text-stone-700 lg:text-lg xl:text-base">
        {description}
      </p>
      <div className="my-4">
        <button
          className={`px-4 py-2 transition duration-150 ${colorClasses[bar]}  rounded-xl font-medium text-stone-700`}
        >
          Détails
        </button>
      </div>
    </div>
  );
}

export default PricingCardFr;
