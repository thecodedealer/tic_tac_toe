/**
 * STATE INTERFACE
 */
export interface IState {
    step: number
    test: any
    board: any[]
    players: {
        1: string,
        2: string
    }
    turn: 1 | 2

}

/**
 * ACTION TYPES
 */
export enum ActionTypes {
    NAVIGATE = 'NAVIGATE',
    TEST = 'TEST',
    SET_MOVE = 'SET_MOVE',
    SET_TURN = 'SET_TURN',
    SET_PLAYER_NAME = 'SET_PLAYER_NAME',

    NET_GAME = 'NET_GAME',
    RESET_GAME = 'RESET_GAME'
}


/**
 * ACTIONS CREATORS INTERFACES
 */
export interface NavigateAction {
    type: ActionTypes.NAVIGATE,
    payload: number
}

export interface TestAction {
    type: ActionTypes.TEST,
    payload: any
}

export interface SetMoveAction {
    type: ActionTypes.SET_MOVE,
    payload: {
        value: number,
        target: 'X' | 'O'
    }
}

export interface SetTurnAction {
    type: ActionTypes.SET_TURN,
    payload?: null
}

export interface SetPlayerName {
    type: ActionTypes.SET_PLAYER_NAME,
    payload: {
        target: 1 | 2,
        name: string
    }
}

export interface NewGameAction {
    type: ActionTypes.NET_GAME,
    payload: null
}

export interface ResetGameAction {
    type: ActionTypes.RESET_GAME,
    payload?: null
}


export type Actions = TestAction
    | SetMoveAction
    | SetPlayerName
    | SetTurnAction
    | NewGameAction
    | ResetGameAction
    | NavigateAction
