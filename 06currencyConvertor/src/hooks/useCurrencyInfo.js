import {useState, useEffect} from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Fetch the data using an API Call - Return the string object that will be converted to JSON further
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((err) => console.log("Data Fetching Error", err))
    }, [currency]);
    
    return data;
}

export default useCurrencyInfo;