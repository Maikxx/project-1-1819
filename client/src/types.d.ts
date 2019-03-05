declare const mapboxgl: any

declare module '*.js'

declare module '*.json' {
    const value: any
    export default value
}

declare module '*.jpg' {
    const value: string
    export default value
}