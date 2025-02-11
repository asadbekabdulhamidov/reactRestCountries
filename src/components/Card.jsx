import { Link } from "react-router-dom";

function Card({ country }) {
  const { name, population, region, capital, flags } = country;

  return (
    <div className="group shadow-md w-[264px] relative">
      <img className="w-[264px] md:h-[160px]" src={flags.png} alt={flags.alt} />
      <div className="px-6 pt-6 pb-11">
        <h4 className="text-xl font-bold mb-4 dark:text-white">
          {name.common}
        </h4>
        <p className="mb-2 dark:text-white">
          <span className="font-bold">Population: </span>
          <span>{population.toLocaleString()}</span>
        </p>
        <p className="mb-2 dark:text-white">
          <span className="font-bold">Region: </span>
          <span>{region}</span>
        </p>
        <p className="dark:text-white">
          <span className="font-bold">Capital: </span>
          <span>{capital}</span>
        </p>
      </div>
      <Link
        className="absolute bottom-2 right-4 text-purple-950 visible opacity-0 group-hover:opacity-100 dark:text-white"
        to={`/product/${country.name.common}`}
      >
        Read More...
      </Link>
    </div>
  );
}

export default Card;
