import { StyledResult } from "./styled"

const Result = ({ result }) => (
    <StyledResult>
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currencyName}
                </strong>
            </>
        )}
    </StyledResult>
)

export default Result;