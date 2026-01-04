import './App.css'
import { useState } from 'react'
import ModelSelector from './components/ModelSelector/ModelSelector'
import { Cpu, Gpu, Ssd, Psu } from './model/part-model'
import { SolutionReport } from './components/SolutionReport'

function App() {

  const [selectedGpu, setSelectedGpu] = useState<Gpu | null>(null)
  const [selectedPsu, setSelectedPsu] = useState<Psu | null>(null)
  const [selectedCpu, setSelectedCpu] = useState<Cpu | null>(null)

  const gpuModels = [
    new Gpu('GA', 'Nvidia 5600', 500, 'ATX'),
    new Gpu('GB', 'Nvidia 5800', 700, 'E-ATX'),
  ]

  const psuModels = [
    new Psu('PA', '400W', 400),
    new Psu('PB', '1200W', 1200),
  ]

  const cpuModels = [
    new Cpu('CA', 'AMD Ryzen 7', 200),
    new Cpu('CB', 'Intel X5650', 150),
  ]

  function onGPUChangeHandler(value: Gpu) {
    setSelectedGpu(value)
  }

  function onPSUChangeHandler(value: Psu) {
    setSelectedPsu(value)
  }

  function onCPUChangeHandler(value: Cpu) {
    setSelectedCpu(value)
  }

  return (
    <>
      <ModelSelector<Gpu>
        partType='GPU'
        partModels={gpuModels}
        onChange={onGPUChangeHandler}
      />
      <ModelSelector<Cpu>
        partType='CPU'
        partModels={cpuModels}
        onChange={onCPUChangeHandler}
      />
      <ModelSelector<Psu>
        partType='PSU'
        partModels={psuModels}
        onChange={onPSUChangeHandler}
      />
      <SolutionReport
        gpu={selectedGpu}
        cpu={selectedCpu}
        ssd={new Ssd('SA', '1000GB', 100)}
        psu={selectedPsu}
      />
    </>
  )
}

export default App
