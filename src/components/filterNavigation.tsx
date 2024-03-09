"use client";

const buttonStyle = `text-sm md:text-lg px-6 md:px-11 py-2
                   
outline-none text-center text-gray-300 border-2 border-gray-900 rounded-full transition-colors
`;

const FilterNavigation = () => {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <section className="flex overflow-x-auto gap-6 2xl:gap-8 pb-6">
      <button
        autoFocus={true}
        className={`${buttonStyle} text-white bg-gray-900 font-medium
        active:border active:border-[#00A3FF] 
      hover:border hover:border-[#00A3FF] 
      `}
      >
        Todos
      </button>
      {alphabet.map((letter) => (
        <button
          key={letter}
          className={`${buttonStyle}
          focus:bg-[#00A3FF] focus:font-medium focus:text-white 
          hover:bg-[#00A3FF] 
          `}
        >
          {letter}
        </button>
      ))}
    </section>
  );
};

export default FilterNavigation;
