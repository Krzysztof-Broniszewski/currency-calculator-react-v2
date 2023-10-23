import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {

        const fetchRates = async () => {
            try {
                const response = await fetch("http://api.nbp.pl/api/exchangerates/tables/A/?format=json");
                // console.log(response)

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                console.log(data);

                setRatesData({
                    state: "success",
                    rates: data[0].rates,
                    date: data[0].effectiveDate,
                    table: data[0].no,
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

    console.log(ratesData);

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