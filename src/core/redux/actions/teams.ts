import {TeamsService} from "../../../api/services/teamsService";
import {TeamActionType, TeamActionTypes} from "../types/teams";
import {Dispatch} from "redux";

export const getTeams = () => (dispatch: Dispatch<TeamActionTypes>) => {
    return TeamsService.getTeams().then(response => {
        dispatch({
            type: TeamActionType.SET_TEAMS,
            payload: response.data
        })
    })
}