import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [clockState, setClockState] = useState();
    const showDate = new Date();

    useEffect(() => {
        setInterval(() => {
            setClockState(showDate.toLocaleString());
        }, 1000);
    }, []);
    return (
        <p className="clock">
            <>
                <p>
                    {clockState}
                </p>
                <p>
                    Dziś jest: {showDate.toLocaleString()}
                </p>
            </>
        </p>
    );
};

export default Clock;