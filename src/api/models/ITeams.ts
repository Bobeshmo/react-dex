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