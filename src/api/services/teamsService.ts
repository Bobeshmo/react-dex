import {IData, ITeams} from "../models/ITeams";
import HTTP from "../../axios/instanceAxios";
import {AxiosResponse} from "axios";

export class TeamsService {
    static async getTeams() {
        return HTTP.get<ITeams>('/api/Team/GetTeams')
    }

    static async addTeam(name: string, foundationYear: number, division: string, conference: string, imageUrl: string) {
        return HTTP.post<IData>('/api/Team/Add', {name, foundationYear, division, conference, imageUrl})
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}