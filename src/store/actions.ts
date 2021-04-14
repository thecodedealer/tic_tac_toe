import {ActionTypes, NavigateAction, ResetGameAction, SetMoveAction, SetPlayerName, SetTurnAction} from "./types";

export const triggerTest = (payload: any) => ({
    type: ActionTypes.TEST,
    payload
})

export const setMove = (payload: { value: number, target: 'X' | 'O' }): SetMoveAction => ({
    type: ActionTypes.SET_MOVE,
    payload
})

export const setTurn = (): SetTurnAction => ({
    type: ActionTypes.SET_TURN,
    payload: null
})

export const setPlayerName = (target: 1 | 2, name: string): SetPlayerName => ({
    type: ActionTypes.SET_PLAYER_NAME,
    payload: {target, name}
})

export const navigate = (payload: number): NavigateAction => ({
    type: ActionTypes.NAVIGATE,
    payload
})

export const resetGame = (): ResetGameAction => ({
    type: ActionTypes.RESET_GAME,
    payload: null
})
