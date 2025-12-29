import type { GpuModel, PsuModel } from '../ModelSelector/part-model'
import { Solver } from './solution-report'

type SolutionReportProps = {
    gpu: GpuModel | null
    psu: PsuModel | null
}

export default function SolutionReport(props: SolutionReportProps) {
    const gpuPower = props.gpu?.powerConsumption ?? null
    const psuPower = props.psu?.outputPower ?? null
    const result: CompatibilityResult = Solver.solveGpuPsu(gpuPower, psuPower)

    switch (result) {
        case 'missing value':
            return <p>Missing power value.</p>
        case 'yes':
            return (
                <p>
                    GPU consumption power: { gpuPower } W<br />
                    PSU output power: { psuPower } W<br />
                    The components are compatible!
                </p>
            )
        case 'no':
            return (
                <p>
                    GPU consumption power: { gpuPower } W<br />
                    PSU output power: { psuPower } W<br />
                    Chosen components are not compatible.
                </p>
            )
    }
}