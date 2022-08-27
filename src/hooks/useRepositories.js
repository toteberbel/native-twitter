import React, { useState, useEffect } from "react";

const useRepositories = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await globalThis.fetch(
        "http://192.168.1.40:5000/api/repositories"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const nodes = data ? data.edges.map((edge) => edge.node) : [];
  return { repositories: nodes };
};

export default useRepositories;
