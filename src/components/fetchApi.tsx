import { useEffect, useState } from "react";

type Country = {
  name: string;
};
const FetchApi = () => {
  const [listPays, setListPays] = useState<Country[]>([]);
  useEffect(() => {
    fetch("https://countries.dev/countries?fields=name", { method: "GET" })
      .then((response) => response.json())
      .then((list) => setListPays(list));
  }, []);

  console.log(listPays);
  return (
    <select className="rounded-sm transition-all duration-300 ease-in-out border border-gray-200 focus:outline-2 outline-gray-500 p-2" required onChange={(e)=> console.log(e.target.value) }>
      {listPays.map((pays, index) => {
        return (
          <option key={index} value={pays.name}>
            {pays.name}
          </option>
        );
      })}
    </select>
  );
};

export default FetchApi;
