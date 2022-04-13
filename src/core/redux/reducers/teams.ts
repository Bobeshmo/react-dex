import {TeamActionType, TeamActionTypes} from "../types/teams";
import {IState} from "../types/teams";

const initialState: IState = {
    teams: null,
    loading: false,
    error: null,
}

export function teams(state = initialState, action: TeamActionTypes) {
    switch (action.type) {
        case TeamActionType.FETCH_TEAMS:
            return {
                ...state,
                loading: true,
                teams: null,
            }
        case TeamActionType.FETCH_TEAMS_SUCCESS:
            return {
                ...state,
                loading: false,
                teams: action.payload
            };
        default:
            return state;
    }
}