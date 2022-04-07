import {ITeams} from "../../../api/models/ITeams";
import {
    SET_TEAMS
} from "./type";

interface IState {
    teams: ITeams | null,
}

const initialState: IState = {
    teams: null
}

export function teams(state = initialState, action: any) {
    const {type, payload} = action

    switch (type) {
        case SET_TEAMS:
            return {
                ...state,
                teams: payload
            };
        default:
            return state;
    }
}