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
    StyledInfo
} from "./styled";
import { theme } from "../theme";

export const Form = ({ calculateResult, result }) => {
    const [currencyName, setcurrencyName] = useState(currencies[1].code);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currencyName, amount);
    }

    return (
        <StyledForm
            theme={theme}
            onSubmit={onSubmit}>
            <Clock />
            <StyledHeader theme= {theme}>
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
                    value={currencyName}
                    onChange={({ target }) => setcurrencyName(target.value)}
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