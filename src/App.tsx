import './App.css'
import { useState } from 'react'
import { ModelSelector } from './components/ModelSelector'
import { GpuModel, PsuModel } from './components/ModelSelector/part-model'
import { SolutionReport } from './components/SolutionReport'

function App() {

  const [selectedGpu, setSelectedGpu] = useState<GpuModel | null>(null)
  const [selectedPsu, setSelectedPsu] = useState<PsuModel | null>(null)

  const gpuModels = [
    new GpuModel('GA', 'Nvidia 5600', 500),
    new GpuModel('GB', 'Nvidia 5800', 700),
  ]

  const powerModels = [
    new PsuModel('PA', '400W', 400),
    new PsuModel('PB', '1200W', 1200),
  ]

  function onGPUChangeHandler(value: GpuModel) {
    setSelectedGpu(value)
  }

  function onPSUChangeHandler(value: PsuModel) {
    setSelectedPsu(value)
  }

  return (
    <>
      <ModelSelector<GpuModel>
        partType='GPU'
        partModels={gpuModels}
        onChange={onGPUChangeHandler}
      />
      <ModelSelector<PsuModel>
        partType='PSU'
        partModels={powerModels}
        onChange={onPSUChangeHandler}
      />
      <SolutionReport
        gpu={selectedGpu}
        psu={selectedPsu}
      />
    </>
  )
}

export default App
