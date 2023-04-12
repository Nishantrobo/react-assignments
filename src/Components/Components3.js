import { useState } from "react";

export function Compo3(){
    const [change, setChange] = useState("amit");

    function HandleChange(){
        setChange(change === "amit" ? "rajan" : "amit")
    }

    return(
        <div>
            <h1>my name is {change}</h1>
            <button onClick={HandleChange}>Change Name</button>
        </div>
    );
} 