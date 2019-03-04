export interface BuildingsGeoJson {
    type: string
    features: Feature[]
}

export interface Feature {
    type: string
    properties: {
        [key: string]: any
    }
    geometry: {
        type: string
        coordinates: number[]
    }
}
