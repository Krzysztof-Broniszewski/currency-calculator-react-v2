import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const showDateTime = new Date().toLocaleString();
    const [clockState, setClockState] = useState(showDateTime);
    
    const updateDateTime = () => {
        const showDateTime = new Date().toLocaleString();
        setClockState(showDateTime)
    }

    useEffect(() => {
        setInterval(() => {
            updateDateTime()
        }, 1000);
    }, []);
    return (
        <p className="clock">
            Dziś jest: {clockState}
        </p>
    );
};

export default Clock;