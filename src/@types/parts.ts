export class PartModel {
    public id: string
    public name: string

    public constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }
}

export type MotherboardFormFactor =
    | 'ATX'
    | 'microATX'
    | 'Mini-ITX'
    | 'E-ATX'
    | 'Mini-DTX'
    | 'FlexATX'
    | 'Mini-STX'
    | 'HPTX'

export type MonitorPort =
    | 'HDMI'
    | 'DisplayPort'
    | 'DVI'
    | 'VGA'
    | 'Type-C'

export interface PowerConsumer {
    get powerConsumption(): number
}

export interface MotherboardFormFactorCompatible {
    get formFactor(): MotherboardFormFactor
}

export interface MonitorPortCompatible {
    get monitorPorts(): Map<number, MonitorPort>
}