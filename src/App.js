import './App.css';

import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* let actualRateElement = document.querySelector(".js-form__value");
      let resultElement = document.querySelector(".js-form__result");
      let amountElement = document.querySelector(".js-form__amount");
      let warningElement = document.querySelector(".js-form__warning");

      const currencyElement = document.querySelector(".js-form__currency");
      const EUR = 4.7146;
      const USD = 4.7328;
      const GBP = 5.3795;

    currencyElement.addEventListener("input", () => {

        let amount = amountElement.value
        const currencyValue = () => {
            switch (currencyElement.value) {
                case "EUR":
      result = EUR * amount;
      actualRate = EUR;
      warningElement.innerText = "";
      break;
      case "USD":
      result = USD * amount;
      actualRate = USD;
      warningElement.innerText = "";
      break;
      case "GBP":
      result = GBP * amount;
      actualRate = GBP;
      warningElement.innerText = "";
      break;
      case "Select currency":
      warningElement.innerText = "You must select a currency";
            };
        };

      currencyValue();

      actualRateElement.value = actualRate.toFixed(2);
      resultElement.innerText = result.toFixed(2);
    }); */}

    {/* const displayDate = (Date) => {
        const todayElement = document.querySelector(".js-form__date");
      const data = new Date();
      todayElement.innerText = data.toUTCString();
    }

    const init = () => {
        displayDate(Date);
    } */}

      {/* init() */}
      <div className="small_square">Exchange Calculator</div>
      <div className="square">
        <form className="form js-form">
          <fieldset className="form__fieldset">
            <legend>Exchange Calculator</legend>
            <p>
              <label>How much You want buy?</label>
              <input className="form__amount js-form__amount" type="number" required placeholder="Write here amount exchange"/>
            </p>
            <p>
              <label className="form__currency">Currency:</label>
              <select className="js-form__currency" name="currency">
                <option>Select currency</option>
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
              </select>
            </p>
            <p>
              <label className="form__rateLabel">Rate for day: <span className="form__date js-form__date"></span></label>
              <input className="form__value js-form__value" required readonly/>
            </p>
          </fieldset>
          <p>Result: <span className="form__result js-form__result">N/A</span>PLN</p>
          <p><span className="form__warning js-form__warning">You must select a currency</span></p>
        </form>
      </div>
        < Footer
          title="© 2022 Krzysztof Broniszewski - Wszelkie prawa zastrzeżone."
        />
    </div>
  );
}

export default App;
