export function isGpuPsuCompatibile(
    powerConsumption: number | null,
    outputPower: number | null
): string {
    let result: string
    if (powerConsumption === null)
        result = 'There is no data about power consumption of GPU.'
    else if (outputPower === null)
        result = 'There is no data about ouput power of PSU.'
    else if (powerConsumption < outputPower)
        result = 'The components are compatible!'
    else 
        result = 'Chosen components are not compatible.'
    return `The power consumption of chosen GPU is ${powerConsumption} W.
            The output power of chosen PSU is ${outputPower} W.
            ${result}`
}