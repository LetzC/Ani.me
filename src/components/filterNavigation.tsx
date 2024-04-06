import Link from "next/link";

const buttonStyle = `text-sm md:text-lg px-6 md:px-11 py-2
                   
outline-none text-center text-light-gray border-2 border-dark-bluish-gray rounded-full transition-colors
`;

const FilterNavigation = () => {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <section className="flex overflow-x-auto gap-6 2xl:gap-8 pb-6 scroll-smooth">
      <Link
        href={"/lista"}
        autoFocus={true}
        className={`${buttonStyle} text-white bg-dark-bluish-gray font-medium
        active:border active:border-emphasis 
      hover:border hover:border-emphasis
      `}
      >
        Todos
      </Link>
      {alphabet.map((letter) => (
        <Link
          href={`/a-z/${letter.toLowerCase()}`}
          key={letter}
          className={`${buttonStyle}
          focus:bg-emphasis focus:font-medium focus:text-white 
          hover:bg-emphasis
          `}
        >
          {letter}
        </Link>
      ))}
    </section>
  );
};

export default FilterNavigation;
