import type { PartModel, PowerConsumer } from "../@types/parts"
import { CpuModel, GpuModel, SsdModel, PsuModel } from "./part-model"

export default class Computer {
    cpu: CpuModel | null = null
    gpu: GpuModel | null = null
    ssd: SsdModel | null = null
    psu: PsuModel | null = null

    constructor(
        cpu: CpuModel | null = null,
        gpu: GpuModel | null = null,
        ssd: SsdModel | null = null,
        psu: PsuModel | null = null
    ) {
        this.cpu = cpu
        this.gpu = gpu
        this.ssd = ssd
        this.psu = psu
    }

    get components(): (PartModel | null)[] {
        return [
            this.cpu,
            this.gpu,
            this.ssd,
            this.psu
        ]
    }

    get consumers(): (PowerConsumer | null)[] {
        return [
            this.cpu,
            this.gpu,
            this.ssd
        ]
    }
}