import Computer from "../../model/computer"

export class Solver {
    static solveConfig(comp: Computer
    ): CompatibilityResult {
        for (const arg of comp.components) {
            if (arg == null) return 'missing value'
        }

        const totalConsumption = comp.consumers.reduce(
            (acc, part) => acc + (part?.powerConsumption ?? 0), 0
        )

        if (totalConsumption < comp.psu!.outputPower)
            return 'yes'
        else
            return 'no'
    }
}