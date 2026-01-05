import Computer from "../../model/computer"

export class Solver {

    static checkPowerCompatibility(comp: Computer): CompatibilityResult {
        for (const arg of comp.components) {
            if (arg == null) return 'missing value'
        }

        const totalConsumption = comp.powerConsumers.reduce(
            (acc, part) => acc + part.powerConsumption, 0
        )

        const psu = comp.psu
        if (psu === null)
            return 'missing value'

        if (totalConsumption < psu.outputPower)
            return 'yes'
        else
            return 'no'

    }

}

