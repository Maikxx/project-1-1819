export class Validator {
    public static validateDate(text: string) {
        const dateToTest = new Date(text)
        return Boolean(+dateToTest)
    }

    public static isObject(subject: any) {
        return !Array.isArray(subject)
            && !Validator.isTypeOf(subject, 'function')
            && subject === Object(subject)
    }

    public static isTypeOf(value: any, type: string) {
        return typeof value === type
    }

    public static isTruthyArray(value: any) {
        return Array.isArray(value) && value.length > 0
    }

    public static isPromise(value: any) {
        return !!value
            && (typeof value === 'object' || typeof value === 'function')
            && typeof value.then === 'function'
    }

    public static isSvgElement(component: string) {
        return component === 'a'
            || component === 'animate'
            || component === 'animateMotion'
            || component === 'animateTransform'
            || component === 'circle'
            || component === 'clipPath'
            || component === 'color-profile'
            || component === 'defs'
            || component === 'desc'
            || component === 'discard'
            || component === 'ellipse'
            || component === 'feBlend'
            || component === 'feColorMatrix'
            || component === 'feComponentTransfer'
            || component === 'feComposite'
            || component === 'feConvolveMatrix'
            || component === 'feDiffuseLighting'
            || component === 'feDisplacementMap'
            || component === 'feDistantLight'
            || component === 'feDropShadow'
            || component === 'feFlood'
            || component === 'feFuncA'
            || component === 'feFuncB'
            || component === 'feFuncG'
            || component === 'feFuncR'
            || component === 'feGaussianBlur'
            || component === 'feImage'
            || component === 'feMerge'
            || component === 'feMergeNode'
            || component === 'feMorphology'
            || component === 'feOffset'
            || component === 'fePointLight'
            || component === 'feSpecularLighting'
            || component === 'feSpotLight'
            || component === 'feTile'
            || component === 'feTurbulence'
            || component === 'filter'
            || component === 'foreignObject'
            || component === 'g'
            || component === 'hatch'
            || component === 'hatchpath'
            || component === 'image'
            || component === 'line'
            || component === 'linearGradient'
            || component === 'marker'
            || component === 'mask'
            || component === 'mesh'
            || component === 'meshgradient'
            || component === 'meshpatch'
            || component === 'meshrow'
            || component === 'metadata'
            || component === 'mpath'
            || component === 'path'
            || component === 'pattern'
            || component === 'polygon'
            || component === 'polyline'
            || component === 'radialGradient'
            || component === 'rect'
            || component === 'script'
            || component === 'set'
            || component === 'solidcolor'
            || component === 'stop'
            || component === 'style'
            || component === 'svg'
            || component === 'switch'
            || component === 'symbol'
            || component === 'text'
            || component === 'textPath'
            || component === 'title'
            || component === 'tspan'
            || component === 'unknown'
            || component === 'use'
            || component === 'view'
    }
}
