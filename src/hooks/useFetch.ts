import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (method: () => void, url: string) => {
  const [items, setItems] = useState([]);
  console.log(items);
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

  return items;
};

export default useFetch;
