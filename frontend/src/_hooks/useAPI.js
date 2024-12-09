import { useEffect, useState } from "react";
import axios from "axios";

const handleGet = () => {
  return axios.get().then().catch();
};
const handleCreate = () => {};
const handleUpdate = () => {};

const handleDelete = () => {};

const useApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGet();
  }, [handleGet]);
};

export default useApi;
