import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
