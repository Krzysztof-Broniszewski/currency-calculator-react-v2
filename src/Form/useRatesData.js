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

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { pln, date } = await response.json();
                setRatesData({
                    state: "success",
                    rates: pln,
                    date: date,
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