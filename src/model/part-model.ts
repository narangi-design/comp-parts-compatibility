import { PartModel } from "../@types/parts"
import { type PowerConsumer } from "../@types/parts"

export class GpuModel extends PartModel implements PowerConsumer {
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

export class CpuModel extends PartModel implements PowerConsumer {
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

export class SsdModel extends PartModel implements PowerConsumer {
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
