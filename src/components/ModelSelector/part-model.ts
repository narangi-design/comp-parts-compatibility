export class PartModel {
    public id: string
    public name: string

    public constructor (id: string, name: string) {
        this.id = id
        this.name = name
    }
}

export class GpuModel extends PartModel {
    public powerConsumption: number
    constructor(
        id: string,
        name: string,
        powerConsumption: number
    ) {
        super(id, name)
        this.powerConsumption = powerConsumption
    }
}

export class PsuModel extends PartModel {
    public outputPower: number
    constructor(
        id: string,
        name: string,
        outputPower: number
    ) {
        super(id, name)
        this.outputPower = outputPower
    }
}