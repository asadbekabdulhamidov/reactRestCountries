import { useParams } from "react-router-dom";
//cutom hooks
import { useFetch } from "../hooks/useFetch";

//impot react router dom
import { Link } from "react-router-dom";

//react icons
import { FaArrowLeft } from "react-icons/fa";

function Product() {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(
    `https://restcountries.com/v3.1/name/${id}`
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <>
      {data && (
        <div className="align-elements  ">
          <Link
            to="/"
            className=" dark:bg-[#2b3844] flex items-center justify-center rounded-md gap-2 w-[136px] py-2 mb-10  "
          >
            <FaArrowLeft className="dark:text-white" />
            <span className="dark:text-white"> Go back</span>
          </Link>
          <div
            className="flex flex-col md:flex-row gap-10 lg:gap-28
          "
          >
            <div className="md:mb-11  ">
              <img
                className="w-[320px] h-[229px] lg:w-[560px] md:h-[401px]"
                src={data[0].flags?.png}
                alt={id + "flag"}
              />{" "}
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col lg:flex-row justify-start md:items-center gap-8 md:gap-[141px]  mb-10">
                <div>
                  <h1 className="text-3xl font-bold mb-6 dark:text-white">
                    {id}
                  </h1>
                  <p className="mb-2 dark:text-white">
                    <span className="font-bold">Native Name: </span>
                    <span>{data[0].name.common}</span>
                  </p>
                  <p className="mb-2 dark:text-white">
                    <span className="font-bold">Population: </span>
                    <span>{data[0].population}</span>
                  </p>
                  <p className="dark:text-white mb-2">
                    <span className="font-bold">Region: </span>
                    <span>{data[0].region}</span>
                  </p>
                  <p className="dark:text-white mb-2">
                    <span className="font-bold">Sub Region: </span>
                    <span>{data[0].subregion}</span>
                  </p>
                  <p className="dark:text-white mb-2">
                    <span className="font-bold">Capital: </span>
                    <span>{data[0].capital}</span>
                  </p>
                </div>
                <div>
                  <p className="dark:text-white mb-2">
                    <span className="font-bold">Top Level Domain: </span>
                    <span>{data[0].tld[0]}</span>
                  </p>
                  <p className="dark:text-white mb-2">
                    <span className="font-bold">Currencies: </span>
                    <span>{data[0].currencies?.SHP?.name}</span>
                  </p>
                  <p className="dark:text-white mb-2">
                    <span className="font-bold">Languages: </span>
                    {Object.values(data[0].languages).map((lang, index) => {
                      return <span key={index}>{lang}</span>;
                    })}
                  </p>
                </div>
              </div>

              <div>
                <p className="dark:text-white md:flex  mb-2">
                  <span className="font-bold mb-4  lg:mb-0 mr-2">
                    Border Countries:{" "}
                  </span>
                  <div className="flex flex-wrap  gap-4">
                    {data[0].borders &&
                      data[0]?.borders.map((item, index) => {
                        return (
                          <span
                            className="dark:bg-[#2b3844] dark:border-none border px-7 py-1 rounded-md shadow-sm mr-2"
                            key={index}
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
