import { useParams } from "react-router-dom";
//cutom hooks
import { useFetch } from "../hooks/useFetch";

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
        <div className="align-elements ">
          <div
            className="flex  gap-28
          "
          >
            <div className="mb-11  ">
              <img
                className="w-[560px] h-[401px]"
                src={data[0].flags?.png}
                alt={id + "flag"}
              />{" "}
            </div>
            <div>
              <h1 className="text-2xl mb-6 dark:text-white">{id}</h1>

              <div>
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
                  {/* Object.keys(data[0].languages).map((item)=>{return<span>{item}</span>}) */}
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
