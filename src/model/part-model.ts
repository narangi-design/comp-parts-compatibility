import {
    PartModel,
    type PowerConsumer,
    type MotherboardFormFactorCompatible
} from '../@types/parts'

export class Gpu extends PartModel implements PowerConsumer, MotherboardFormFactorCompatible {
    public powerConsumption: number
    public formFactor: MotherboardFormFactor
    constructor(
        id: string,
        name: string,
        powerConsumption: number,
        formFactor: MotherboardFormFactor
    ) {
        super(id, name)
        this.powerConsumption = powerConsumption
        this.formFactor = formFactor
    }
}

export class Cpu extends PartModel implements PowerConsumer {
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

export class Ssd extends PartModel implements PowerConsumer {
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

export class Psu extends PartModel {
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

export class ComputerCase extends PartModel implements MotherboardFormFactorCompatible {
    public formFactor: MotherboardFormFactor
    constructor(
        id: string,
        name: string,
        formFactor: MotherboardFormFactor
    ) {
        super(id, name)
        this.formFactor = formFactor
    }
}

export class MotherBoard extends PartModel implements MotherboardFormFactorCompatible {
    public formFactor: MotherboardFormFactor
    constructor(
        id: string,
        name: string,
        formFactor: MotherboardFormFactor
    ) {
        super(id, name)
        this.formFactor = formFactor
    }
}
