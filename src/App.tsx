import React from 'react';
import './App.scss';
import {useSelector} from "react-redux";
import {selectStep} from "./store/selectors";

import GameBoard from "./components/GameBoard/GameBoard";
import SelectNames from "./components/SelectNamesForm/SelectNames";

function App() {
    const step = useSelector(selectStep)

    return (
        <div className="flex-container">
            <div className="flex-justify">
                {step === 1 && <SelectNames/>}
                {step === 2 && <GameBoard/>}
            </div>
        </div>
    );
}

export default App;
