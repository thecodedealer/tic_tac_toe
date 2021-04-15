import React, {FC, useCallback, useMemo} from 'react';
import './GameBoard.scss'
import Square from "../Square/Square";
import {useDispatch, useSelector} from "react-redux";
import {selectBoard, selectCurrentPlayer, selectPlayers, selectTurn} from "../../store/selectors";
import {navigate, resetGame, setMove, setTurn} from "../../store/actions";
import Button from "../Button/Button";
import {useWinner} from "../../hooks/useWinner";

interface IProps {
}

const GameBoard: FC<IProps> = () => {
    const dispatch = useDispatch()
    const board = useSelector(selectBoard)
    const turn = useSelector(selectTurn)
    const currentPlayer = useSelector(selectCurrentPlayer)
    const players = useSelector(selectPlayers)
    const winner = useWinner(board)

    const handleMove = useCallback((value: number) => {

        if (winner || board[value]) return;

        const target = turn === 1 ? "X" : "O"

        dispatch(setMove({value, target}))
        dispatch(setTurn())
    }, [winner, board, dispatch, turn])

    const renderBoard = useMemo(() => {
        return [[0, 1, 2], [3, 4, 5], [6, 7, 8]].map((column) => {
            return (
                <div className="column" key={column[0]}>
                    {column.map(item => <Square key={item} target={board[item]} action={() => handleMove(item)}/>)}
                </div>
            )
        })
    }, [handleMove, board])

    return (
        <div className='game-container'>
            {!winner && <p className="title">Current player: {currentPlayer.toUpperCase()}</p>}
            {winner && <p className="won">!!! {players[winner === 'X' ? 1 : 2].toUpperCase()} WON !!!</p>}

            <div className="ticTacToe">
                {renderBoard}
            </div>

            <div className="buttons">
                <Button name="Reset Game" onClick={() => dispatch(resetGame())}/>
                <Button name="New game" onClick={() => dispatch(navigate(1))}/>
            </div>
        </div>

    )
}

export default GameBoard
