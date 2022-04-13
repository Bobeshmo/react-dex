export enum TeamActionType {
    FETCH_TEAMS = 'FETCH_TEAMS',
    FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS"
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

export interface IState {
    teams: ITeams | null,
    loading: boolean,
    error: null | string
}

interface FetchTeamsAction {
    type: typeof TeamActionType.FETCH_TEAMS
}

interface TeamAction {
    type: TeamActionType
    payload: ITeams
}

export type TeamActionTypes =
    TeamAction
    | FetchTeamsAction