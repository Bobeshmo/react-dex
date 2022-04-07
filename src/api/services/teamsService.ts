import {ITeams} from "../models/ITeams";
import HTTP from "../../axios/instanceAxios";

export class TeamsService {
    static async getTeams() {
        return HTTP.get<ITeams>('/api/Team/GetTeams')
    }
}