import { useState } from "react";
import { currencies, useRatesData } from "../currencies";
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
} from "./styled";
import { theme } from "../theme";

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
            <Clock />
            <StyledHeader theme= {theme}>
                Przelicznik walut
            </StyledHeader>
            {/* {ratesData.state === "loading"
                ? (
                    <Loading>
                        Sekundka... <br />Ładuję kursy walut ze strony Banku.
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
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
            </StyledInfo>
            <Result result={result} />
            <Footer title="© 2022 Krzysztof Broniszewski -&nbsp; Wszelkie prawa zastrzeżone" />
        </StyledForm>
    );
};