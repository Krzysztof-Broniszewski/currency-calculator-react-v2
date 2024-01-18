import { useEffect, useState } from "react";

const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api/latest/currencies/pln.json";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { pln, date } = await response.json();
                setRatesData({
                    status: "success",
                    rates: pln,
                    date: date,
                });
            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};