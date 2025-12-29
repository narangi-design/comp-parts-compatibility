import type { GpuModel, PsuModel } from '../ModelSelector/part-model'
import { isGpuPsuCompatibile } from './solution-report'

type SolutionReportProps = {
    gpu: GpuModel | null
    psu: PsuModel | null
}

export default function SolutionReport(props: SolutionReportProps) {
    const gpuPower = props.gpu?.powerConsumption ?? null
    const psuPower = props.psu?.outputPower ?? null
    return (
        <p>
            {isGpuPsuCompatibile(gpuPower, psuPower)}
        </p>
    )
}