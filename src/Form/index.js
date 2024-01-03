<<<<<<< HEAD
import { useState } from "react";
import { currencies, useRatesData } from "../currencies";
=======
import { useEffect, useState } from "react";
// import { currencies } from "../currencies";
>>>>>>> origin/currencies-from-cdn
import Result from "../Result";
import Footer from "../Footer";
import Clock from "../Clock";
import {
    StyledForm,
    StyledHeader,
    StyledLabel,
    StyledInput,
    StyledField,
    StyledButton,
    StyledInfo,
<<<<<<< HEAD
=======
    Loading,
    Failure,
>>>>>>> origin/currencies-from-cdn
} from "./styled";
import { theme } from "../theme";
import { useRatesData } from "./useRatesData";

<<<<<<< HEAD
export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();
    console.log(ratesData);

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

// export const Form = ({ calculateResult, result }) => {
//     const [currencyName, setCurrencyName] = useState(currencies[1].code);
//     const [amount, setAmount] = useState("");
//     // const [date_nbp, setDateNbp] = useState(data_nbp);

//     const text = "test";

//     const onSubmit = (event) => {
//         event.preventDefault();
//         calculateResult(currencyName, amount);

    return (
        <StyledForm
            theme={theme}
            onSubmit={theme}>
=======

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("usd");
    const [amount, setAmount] = useState(100);

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    // const rates = ratesData ? Object.keys(ratesData) : [];
    
    return (
        <StyledForm
            onSubmit={onSubmit}>
>>>>>>> origin/currencies-from-cdn
            <Clock />
            <StyledHeader>
                Przelicznik walut
            </StyledHeader>
<<<<<<< HEAD
            {/* {ratesData.state === "loading"
                ? (
                    <Loading>
                        Sekundka... <br />Ładuję kursy walut ze strony Banku.
=======
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Sekundka... <br />Ładuję kursy walut ze strony NBP
>>>>>>> origin/currencies-from-cdn
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
<<<<<<< HEAD
                            Hmm... Coś poszło nie tak, sprawdź czy masz połączenie z internetem.
                        </Failure>
                    ) : 
                )
            } */}
            <p>
                <StyledLabel theme={theme}>
                    Kwota w zł*:
                </StyledLabel>
                <StyledInput
                    value={theme}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę w zł"
                    className="form__field"
                    type="number"
                    required
                    step="0.01"
                />
            </p>
            <p>
                <StyledLabel theme={theme}>
                    Waluta:
                </StyledLabel>
                <StyledField
                    value={currencyName}
                    onChange={({ target }) => setCurrencyName(target.value)}
                >
                    {currencies.map((currencyName => (
                        <option
                            key={currencyName.code}
                            value={currencyName.code}
                        >
                            {currencyName.currency}
                        </option>
                    )))}
                </StyledField>
            </p>
            <p>
                <StyledButton theme={theme}>
                    Przelicz
                </StyledButton>
            </p>
            <StyledInfo>
                Kursy pochodzą ze strony nbp.pl&nbsp; Tabela nr  z dnia
=======
                            Hmm... Coś poszło nie tak. Sprawdź czy masz połączenie z internetem?
                        </Failure>
                    )
                        : (
                            <>
                                <p>
                                    <StyledLabel>
                                        Kwota w zł*:
                                    </StyledLabel>
                                    <StyledInput
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        placeholder="Wpisz kwotę w zł"
                                        type="number"
                                        required
                                        step="0.01"
                                    />
                                </p>
                                <p>
                                    <StyledLabel>
                                        Waluta:
                                    </StyledLabel>
                                    <StyledField
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {/* {(ratesData.rates).map((key, index) => (
                                            <option
                                                key={ratesData.rates[key]}
                                                value={ratesData.rates[index]}
                                            >
                                                {Object.values(ratesData.rates[index])}
                                            </option>
                                        ))} */}
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency.toUpperCase()}
                                            </option>
                                        )))}
                                    </StyledField>
                                </p>
                                <p>
                                    <StyledButton theme={theme}>
                                        Przelicz
                                    </StyledButton>
                                </p>    
                            </>
                    )  
                )
            }
            
            <StyledInfo>
                Kursy walut z dnia {ratesData.date}
>>>>>>> origin/currencies-from-cdn
            </StyledInfo>
            <Result result={result} />
            <Footer title="© 2022 Krzysztof Broniszewski -&nbsp; Wszelkie prawa zastrzeżone" />
        </StyledForm>
    );
};