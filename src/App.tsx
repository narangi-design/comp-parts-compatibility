import './App.css'
import { useState } from 'react'
import ModelSelector from './components/ModelSelector/ModelSelector'
import { CpuModel, GpuModel, SsdModel, PsuModel } from './model/part-model'
import { SolutionReport } from './components/SolutionReport'

function App() {

  const [selectedGpu, setSelectedGpu] = useState<GpuModel | null>(null)
  const [selectedPsu, setSelectedPsu] = useState<PsuModel | null>(null)
  const [selectedCpu, setSelectedCpu] = useState<CpuModel | null>(null)

  const gpuModels = [
    new GpuModel('GA', 'Nvidia 5600', 500),
    new GpuModel('GB', 'Nvidia 5800', 700),
  ]

  const psuModels = [
    new PsuModel('PA', '400W', 400),
    new PsuModel('PB', '1200W', 1200),
  ]

  const cpuModels = [
    new CpuModel('CA', 'AMD Ryzen 7', 200),
    new CpuModel('CB', 'Intel X5650', 150),
  ]

  function onGPUChangeHandler(value: GpuModel) {
    setSelectedGpu(value)
  }

  function onPSUChangeHandler(value: PsuModel) {
    setSelectedPsu(value)
  }

  function onCPUChangeHandler(value: CpuModel) {
    setSelectedCpu(value)
  }

  return (
    <>
      <ModelSelector<GpuModel>
        partType='GPU'
        partModels={gpuModels}
        onChange={onGPUChangeHandler}
      />
      <ModelSelector<CpuModel>
        partType='CPU'
        partModels={cpuModels}
        onChange={onCPUChangeHandler}
      />
      <ModelSelector<PsuModel>
        partType='PSU'
        partModels={psuModels}
        onChange={onPSUChangeHandler}
      />
      <SolutionReport
        gpu={selectedGpu}
        cpu={selectedCpu}
        ssd={new SsdModel('SA', '1000GB', 100)}
        psu={selectedPsu}
      />
    </>
  )
}

export default App
