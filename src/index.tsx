import * as React from "react";
import * as ReactDOM from "react-dom";

import { PitchBox } from "./components/PitchBox";

//test data: 
const pitchers = [ {
        name: "Daniel Grocki",
        amount: 4.20
    }, {
        name: "Zoe Stein-Hansen",
        amount: 3.30
    }
];
ReactDOM.render(
    <PitchBox name="Brooks Mikkelsen" amount={13.75} message="Test message" pitchers={pitchers}/>,
    document.getElementById("example")
);