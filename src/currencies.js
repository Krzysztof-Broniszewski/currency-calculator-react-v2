<<<<<<< HEAD
<<<<<<< HEAD
// import axios from "axios";
import { useEffect, useState } from "react";
=======
// import axios from 'axios';
>>>>>>> origin/currencies-from-cdn

export const currencies = [
    {
        code: "USD",
        currency: "Dolar amerykański",
        rate: 4.1638,
    },
    {
        code: "EUR",
        currency: "Euro",
        rate: 4.5444,
    },
    {
        code: "GBP",
        currency: "Funt brytyjski",
        rate: 5.2189,
    },
    {
        code: "CHF",
        currency: "Frank szwajcarski",
        rate: 4.6693,
    },
    {
        code: "CZK",
        currency: "Korona czeska",
        rate: 0.1926,
    },
];

<<<<<<< HEAD
// export const currencies2 = 

//     fetch('https://api.exchangerate.host/latest?base=EUR')
//         .then(response => response.json())
//         .then(currencies2 => console.log(currencies2))
//         .catch(error => console.error("Something bad happened !", error));

// export const currencies_nbp =

//     fetch('http://api.nbp.pl/api/exchangerates/tables/A/last/1/?format=json')
//         .then(response => response.json())
//         .then(currencies_nbp => console.log(currencies_nbp[0]))
//         .catch(error => console.error("Something bad happened !", error));

// export const data_nbp =

//     fetch('http://api.nbp.pl/api/exchangerates/tables/A/last/1/?format=json')
//         .then(response => response.json())
//         .then(data_nbp => console.log(data_nbp[0]["effectiveDate"]))
//         .catch(error => console.error("Something bad happened !", error));

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch('https://api.exchangerate.host/latest');
                if (!response.ok) {
                    throw new Error(response.StatusText);
                }

                const { rates, date, table } = await response.json();

                setRatesData({
                    state: "succes",
                    rates,
                    date,
                    table,
                });
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };
        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};


// export const data_nbp = currencies_nbp["effectiveDate"];
// console.log(data_nbp)
// export const table_nbp = currencies_nbp["no"];
// console.log(table_nbp)
=======
export const currencies = [
    {
        code: "USD",
        currency: "Dolar amerykański",
        rate: 4.1638,
    },
    {
        code: "EUR",
        currency: "Euro",
        rate: 4.5444,
    },
    {
        code: "GBP",
        currency: "Funt brytyjski",
        rate: 5.2189,
    },
    {
        code: "CHF",
        currency: "Frank szwajcarski",
        rate: 4.6693,
    },
    {
        code: "CZK",
        currency: "Korona czeska",
        rate: 0.1926,
    },
];
>>>>>>> features
=======

// export const axiosNbp = async () => {
//     try {
//         const response = await axios.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
//         return response
//     } catch (error) {
//         console.error(error);
//     }
// };

// axiosNbp();
>>>>>>> origin/currencies-from-cdn
