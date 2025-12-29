export class PartModel {
    public id: string
    public name: string

    public constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }
}

export interface PowerConsumer {
    get powerConsumption(): number
}