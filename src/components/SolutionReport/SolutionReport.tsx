import { PartModel } from '../../@types/parts'
import Computer from '../../model/computer'
import type { Cpu, Gpu, Psu, Ssd } from '../../model/part-model'
import { Solver } from './solver'

type SolutionReportProps = {
    gpu: Gpu | undefined
    cpu: Cpu | undefined
    ssd: Ssd | undefined
    psu: Psu | undefined
}

export default function SolutionReport(props: SolutionReportProps) {
    const cpu = props.cpu
    const gpu = props.gpu
    const ssd = props.ssd
    const psu = props.psu
    const parts = [cpu, gpu, ssd, psu].filter(Boolean) as PartModel[]
    const result: CompatibilityResult = Solver.checkPowerCompatibility(new Computer(parts))

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