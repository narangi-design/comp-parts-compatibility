import { useState, type ChangeEvent } from 'react'
import { PartModel } from './part-model'

type ModelSelectorProps<T extends PartModel> = {
    partType: string
    partModels: T[]
    onChange: (t: T) => void
}

export default function ModelSelector<T extends PartModel>(props: ModelSelectorProps<T>) {

    const [selectedModel, setSelectedModel] = useState(props.partModels[0])

    const idToPart = new Map<string, T>(props.partModels.map(p => [p.id, p]))

    function onSelectChangeHandler(e: ChangeEvent<HTMLSelectElement>) {
        const part = idToPart.get(e.target.value)!
        setSelectedModel(part)
        props.onChange(part)
    }

    return (
        <label className='model-selector'>
            Pick {props.partType} model:
            <select
                className='selectedModel'
                value={selectedModel.name}
                onChange={onSelectChangeHandler}
                multiple={false}>
                {props.partModels.map(p =>
                    <option value={p.id}>{p.name}</option>
                )}
            </select>
        </label>
    )
}