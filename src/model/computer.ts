import type { PartModel, PowerConsumer } from "../@types/parts"
import { Cpu, Gpu, Ssd, Psu } from "./part-model"

export default class Computer {
    cpu: Cpu | null = null
    gpu: Gpu | null = null
    ssd: Ssd | null = null
    psu: Psu | null = null

    constructor(
        cpu: Cpu | null = null,
        gpu: Gpu | null = null,
        ssd: Ssd | null = null,
        psu: Psu | null = null
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