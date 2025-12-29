export class Solver {
    static solveGpuPsu(
        powerConsumption: number | null,
        outputPower: number | null
    ): CompatibilityResult {
        if (powerConsumption === null || outputPower === null)
            return 'missing value'
        else if (powerConsumption < outputPower)
            return 'yes'
        else
            return 'no'
    }
}