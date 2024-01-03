import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api/latest/currencies/pln.json";

        const fetchRates = async () => {
            try {
                const response = await fetch(URL);
                // console.log(response)

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { pln, date } = await response.json();
                // console.log(pln);
                // console.log(date);
                setRatesData({
                    state: "success",
                    rates: pln,
                    date: date,
                    // rates: data[0].data,
                    // date: data[0].last_updated_at,
                    // table: data[0].last_updated_at,
                });
                // console.log(ratesData);
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    // console.log(ratesData);

    return ratesData;
};
    // useEffect(() => {
    //     const fetchRates = async () => {
    //         try {
    //             const response = await fetch("http://api.nbp.pl/api/exchangerates/tables/A/?format=json");

    //             if (!response.ok) {
    //                 throw new Error(response.statusText);
    //             }

    //             const { rates, date } = await response.json();
    //             setRatesData({
    //                 state: "success",
    //                 rates,
    //                 date,
    //             });
    //         } catch {
    //             setRatesData({
    //                 state: "error",
    //             });
    //         }
    //     };

    //     setTimeout(fetchRates, 1000);
    // }, []);