import type { PartModel, PowerConsumer } from "../@types/parts"
import { Psu } from "./part-model"
export default class Computer {

    //string id of Map item is supposed to be an id of a part
    parts = new Map<string, PartModel>()

    constructor(parts: PartModel[]) {
        for (const p of parts) {
            this.parts.set(p.id, p)
        }
    }

    get components(): PartModel[] {
        return [...this.parts.values()]
    }

    get powerConsumers(): (PartModel & PowerConsumer)[] {
        return this.components.filter(
            (c): c is PartModel & PowerConsumer =>
                c !== null && 'powerConsumption' in c
        )
    }

    get psu(): Psu | null {
        for (const part of this.parts.values()) {
            if (part instanceof Psu) return part
        }
        return null
    }

}