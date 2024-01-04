import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";


// o cod. path nos parametros é o endpoint do link da API, está sendo subst a mediada a cada Use - UsecapturarNome e UsecapturarPostagem 
// Pode usar esse código pta trazer outra info da API.
function useRequestData(path) {
  
     const [data, setData] = useState([]);
     const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get(`${BASE_URL}${path}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
      });
  }, []);
  return [data, isLoading];
}

export default useRequestData;
