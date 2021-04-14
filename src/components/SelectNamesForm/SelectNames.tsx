import React, {FC, SyntheticEvent} from "react";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {selectPlayers} from "../../store/selectors";
import {navigate, setPlayerName} from "../../store/actions";

interface IProps {
}


const SelectNames: FC<IProps> = () => {
    const dispatch = useDispatch()
    const players = useSelector(selectPlayers)

    const handleChange = (event: SyntheticEvent<HTMLInputElement>, target: 1 | 2) => {
        dispatch(setPlayerName(target, event.currentTarget.value))
    }

    return (
        <div className="container flex-column">
            <h1 className="title">Start new game</h1>

            <div>
                <label htmlFor="player1">Chose player 1 name: </label>
                <input type="text" name="player1" id="player1" value={players["1"]}
                       onChange={(e) => handleChange(e, 1)}/>
            </div>
            <br/>
            <div>
                <label htmlFor="player2">Chose player 2 name: </label>
                <input type="text" name="player2" id="player2" value={players["2"]}
                       onChange={(e) => handleChange(e, 2)}/>
            </div>
            <br/>

            <Button disabled={!(players["1"] && players["2"])} onClick={() => dispatch(navigate(2))}
                    name=" START NEW GAME"/>
        </div>
    )
}

export default SelectNames
