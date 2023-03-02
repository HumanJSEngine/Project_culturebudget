/** @format */

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (method: string, url: string) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      const res = await axios({
        method: method,
        url: url,
      });
      setItems(res.data.expense);
    };
    fetchItem();
  }, []);

  return [items, setItems];
};

export default useFetch;
