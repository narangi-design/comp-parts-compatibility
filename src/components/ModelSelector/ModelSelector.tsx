import { useState, type ChangeEvent } from 'react'
import { PartModel } from '../../@types/parts'

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
        <div className='model-selector'>
            <label>
                Pick {props.partType} model:
            </label>
            <select
                className='selectedModel'
                value={selectedModel.id}
                onChange={onSelectChangeHandler}
                multiple={false}>
                {props.partModels.map(p =>
                    <option key={p.id} value={p.id}>{p.name}</option>
                )}
            </select>
        </div>
    )
}