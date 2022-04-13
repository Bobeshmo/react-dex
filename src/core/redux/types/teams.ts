export enum TeamActionType {
    SET_TEAMS = "SET_TEAMS"
}

export interface IData {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string
    id: number
}

export interface ITeams {
    data: IData[],
    count: number
    page: number
    size: number
}

interface TeamAction {
    type: TeamActionType
    payload: ITeams
}

export type TeamActionTypes = TeamAction