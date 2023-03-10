import { useState } from "react";
import { currencies } from "../currencies";
import Result from "../Result";
import Footer from "../Footer";
import Clock from "../Clock";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currencyName, setcurrencyName] = useState(currencies[1].code);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currencyName, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <Clock />
            <h1 className="form__header">
                Przelicznik walut
            </h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota w zł*:
                    </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Wpisz kwotę w zł"
                        className="form__field"
                        type="number"
                        required
                        step="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <span>
                        Waluta:
                    </span>
                    <select
                        className="form__field"
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
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <p className="form__info">
                Kursy pochodzą ze strony nbp.pl&nbsp; Tabela nr 001/A/NBP/2023 z dnia 2023-01-21
            </p>
            <Result result={result} />
            <Footer title="© 2022 Krzysztof Broniszewski -&nbsp; Wszelkie prawa zastrzeżone." />
        </form>
    );
};