// costum hooks

import { useFetch } from "../hooks/useFetch";

//componnets
import { Card } from "../components";

function Home() {
  const {
    data: countries,
    isPending,
    error,
  } = useFetch(`https://restcountries.com/v3.1/all`);

  return (
    <section className="">
      <div className="align-elements pt-10 flex flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[74px] mx-auto">
          {countries &&
            countries.map((country) => {
              return <Card key={country.name.common} country={country} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Home;
