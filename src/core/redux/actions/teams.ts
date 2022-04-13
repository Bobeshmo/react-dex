import {TeamsService} from "../../../api/services/teamsService";
import {TeamActionType, TeamActionTypes} from "../types/teams";
import {Dispatch} from "redux";

export const getTeams = () => (dispatch: Dispatch<TeamActionTypes>) => {
    dispatch({type: TeamActionType.FETCH_TEAMS});
    return TeamsService.getTeams().then(response => {
        dispatch({
            type: TeamActionType.FETCH_TEAMS_SUCCESS,
            payload: response.data
        })
    })
}