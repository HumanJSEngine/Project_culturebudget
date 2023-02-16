import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (method, url) => {
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
    }, [method, url]);

    return items;
};

export default useFetch;
