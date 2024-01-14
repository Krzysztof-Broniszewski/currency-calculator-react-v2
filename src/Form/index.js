import { useState } from "react";
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

    return (
        <StyledForm
            onSubmit={onSubmit}>
            <Clock />
            <StyledHeader>
                Przelicznik walut
            </StyledHeader>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Sekundka... <br />Ładuję kursy walut ze strony NBP
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
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
            </StyledInfo>
            <Result result={result} />
            <Footer title="© 2022 Krzysztof Broniszewski -&nbsp; Wszelkie prawa zastrzeżone" />
        </StyledForm>
    );
};