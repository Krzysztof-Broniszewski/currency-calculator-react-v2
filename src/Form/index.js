import { useState } from "react";
import { currencies } from "../currencies";
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
    Loading,
    Failure,
} from "./styled";
import { theme } from "../theme";
import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData[1].currency;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <StyledForm
            onSubmit={onSubmit}>
            <Clock />
            <StyledHeader>
                Przelicznik walut
            </StyledHeader>
            <p>
                <StyledLabel theme={theme}>
                    Kwota w zł*:
                </StyledLabel>
                <StyledInput
                    value={amount}
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
                    // value={currencyName}
                    // onChange={({ target }) => setcurrencyName(target.value)}
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
                Kursy pochodzą ze strony nbp.pl&nbsp; Tabela nr 091/A/NBP/2023 z dnia 2023-05-12
            </StyledInfo>
            <Result result={result} />
            <Footer title="© 2022 Krzysztof Broniszewski -&nbsp; Wszelkie prawa zastrzeżone" />
        </StyledForm>
    );
};