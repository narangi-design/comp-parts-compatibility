declare global {

    type CompatibilityResult =
    | 'missing value'
    | 'yes'
    | 'no'
    
    type MotherboardFormFactor =
    | 'ATX'
    | 'microATX'
    | 'Mini-ITX'
    | 'E-ATX'
    | 'Mini-DTX'
    | 'FlexATX'
    | 'Mini-STX'
    | 'HPTX'
}

export {}