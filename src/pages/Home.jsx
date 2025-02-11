// costum hooks

import { useFetch } from "../hooks/useFetch";

//componnets
import { Card, Input, Select } from "../components";

//react router dom
import {} from "react-router-dom";
// react
import { useState } from "react";

// Select uchun optionlar ro'yxati
const options = [
  { value: "Africa", label: "Africa " },
  { value: "Americas", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  console.log(selectValue);

  const {
    data: countries,
    isPending,
    error,
  } = useFetch(`https://restcountries.com/v3.1/all`);

  // const filteredCountries = countries
  //   ? countries.filter((country) =>
  //       country.name.common.toLowerCase().includes(inputValue.toLowerCase())
  //     )
  //   : [];

  const filteredCountries = countries
    ? countries.filter((country) => {
        const matchesSearch = country.name.common
          .toLowerCase()
          .includes(inputValue.toLowerCase());

        const matchesRegion =
          selectValue === "" || country.region === selectValue;

        return matchesSearch && matchesRegion;
      })
    : [];

  return (
    <section className="">
      <div className="align-elements flex flex-col">
        {/* Search input */}
        <div className="flex justify-between">
          <div className="mb-10 w-fit ">
            <Input
              type="text"
              placeholder="Search for a country…"
              name="search"
              setInputValue={setInputValue}
            />
          </div>
          <Select options={options} setSelectValue={setSelectValue} />
        </div>

        {/* Davlatlar ro'yxati */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[74px] mx-auto">
          {isPending && <p className="dark:text-white">Loading...</p>}
          {error && <p className=" dark:text-white">Error: {error}</p>}
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <Card key={country.name.common} country={country} />
            ))
          ) : (
            <p className="dark:text-white">No countries found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
