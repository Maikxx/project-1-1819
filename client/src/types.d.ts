declare const mapboxgl: any

declare module "*.json" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}