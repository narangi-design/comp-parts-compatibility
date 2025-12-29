import Computer from '../../model/computer'
import type { CpuModel, GpuModel, PsuModel, SsdModel } from '../../model/part-model'
import { Solver } from './solution-report'

type SolutionReportProps = {
    gpu: GpuModel | null
    cpu: CpuModel | null
    ssd: SsdModel | null
    psu: PsuModel | null
}

export default function SolutionReport(props: SolutionReportProps) {
    const cpu = props.cpu
    const gpu = props.gpu
    const ssd = props.ssd
    const psu = props.psu
    const result: CompatibilityResult = Solver.solveConfig(new Computer(cpu, gpu, ssd, psu)
    )

    switch (result) {
        case 'missing value':
            return <p>Missing power value.</p>
        case 'yes':
            return (
                <p>
                    CPU consumption power: { cpu?.powerConsumption } W<br />
                    GPU consumption power: { gpu?.powerConsumption } W<br />
                    PSU output power: { psu?.outputPower } W<br />
                    The components are compatible!
                </p>
            )
        case 'no':
            return (
                <p>
                    CPU consumption power: { cpu?.powerConsumption } W<br />
                    GPU consumption power: { gpu?.powerConsumption } W<br />
                    PSU output power: { psu?.outputPower } W<br />
                    Chosen components are not compatible.
                </p>
            )
    }
}