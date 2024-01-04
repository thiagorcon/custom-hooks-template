// Esse código não funciona mais devido ao novo hook criado, o UseRequestData
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";


function useCapturarPostagens() {

     const [postagens, setPostagens] = useState([]);


     useEffect(() => {
       axios
         .get(`${BASE_URL}comments`)
         .then((response) => {
           setPostagens(response.data);
         })
         .catch((error) => {
           console.log(error);
         });
     }, []);

return postagens

}


export default useCapturarPostagens