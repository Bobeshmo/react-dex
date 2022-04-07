import {TeamsService} from "../../../api/services/teamsService";
import {AppDispatch} from "../store";

export const getTeams = () => (dispatch: AppDispatch) => {
    return TeamsService.getTeams().then(response => {
        dispatch({
            type: "SET_TEAMS",
            payload: response.data
        })
    })
}