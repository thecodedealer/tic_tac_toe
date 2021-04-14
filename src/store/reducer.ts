import {produce} from 'immer'
import {Actions, ActionTypes, IState} from "./types";

const initialState: IState = {
    step: 1,
    test: '123',
    board: Array(9).fill(null),
    players: {
        1: '',
        2: ''
    },
    turn: 1
}

export const rootReducer = produce((draft = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.TEST: {
            draft.test = action.payload
            break;
        }

        case ActionTypes.SET_MOVE: {
            const {payload: {value, target}} = action
            draft.board[value ] = target
            break;
        }

        case ActionTypes.SET_TURN: {
            draft.turn = draft.turn === 1 ? 2 : 1
            break;
        }

        case ActionTypes.SET_PLAYER_NAME: {
            const {payload: {name, target}} = action
            draft.players[target] = name
            break
        }

        case ActionTypes.NAVIGATE: {
            const {payload} = action
            if (payload === 1)
                draft.players = {
                    1: '',
                    2: ''
                }
            else
                draft.board = Array(9).fill(null)
            draft.step = payload
            break;
        }

        case ActionTypes.RESET_GAME: {
            draft.board = Array(9).fill(null)
            draft.turn = 1
            break
        }

        default: {
            return draft
        }
    }
})
