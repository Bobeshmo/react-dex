import {ITeams, TeamActionType, TeamActionTypes} from "../types/teams";

interface IState {
    teams: ITeams | null,
}

const initialState: IState = {
    teams: null
}

export function teams(state = initialState, action: TeamActionTypes) {
    switch (action.type) {
        case TeamActionType.SET_TEAMS:
            return {
                ...state,
                teams: action.payload
            };
        default:
            return state;
    }
}