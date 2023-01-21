import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currencyName}
                </strong>
            </>
        )}
    </p>
)

export default Result;