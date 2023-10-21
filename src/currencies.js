// import axios from 'axios';

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


// export const axiosNbp = async () => {
//     try {
//         const response = await axios.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
//         return response
//     } catch (error) {
//         console.error(error);
//     }
// };

// axiosNbp();