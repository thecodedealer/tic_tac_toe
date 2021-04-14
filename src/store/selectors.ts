import {IState} from "./types";
import {createSelector} from 'reselect'


const selectReducer = (state: IState) => state

export const selectTest = createSelector(selectReducer, state => state.test)

export const selectBoard = createSelector(selectReducer, state => state.board)
export const selectTurn = createSelector(selectReducer, state => state.turn)
export const selectPlayers = createSelector(selectReducer, state => state.players)
export const selectCurrentPlayer = createSelector(selectReducer, selectTurn, (state, turn) => state.players[turn])
export const selectStep = createSelector(selectReducer, state => state.step)
