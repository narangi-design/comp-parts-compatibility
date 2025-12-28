import './App.css'
import { ModelSelector, GpuModel, PsuModel } from './components/ModelSelector'

function App() {

  const gpuModels = [
    new GpuModel('GA', 'Nvidia 5600', 500),
    new GpuModel('GB', 'Nvidia 5800', 700),
  ]

  const powerModels = [
    new PsuModel('PA', '400W',  400),
    new PsuModel('PB', '1200W', 1200),
  ]

  function onGPUChangeHandler (value: GpuModel) {
    alert(`GPU: ${value.name}`)
  }

  function onPSUChangeHandler (value: PsuModel) {
    alert(`PSU: ${value.name}`)
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
    </>
  )
}

export default App
