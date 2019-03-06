import { Validator } from '../src/ts/utils/Validator'

describe('Validator.validateDate', () => {
    it('Should pass if a string is a valid date', () => {
        const testData = new Date().toLocaleDateString()
        const result = Validator.validateDate(testData)

        expect(result).toBeDefined()
        expect(result).toBeTruthy()
    })
})

describe('Validator.isObject', () => {
    it('Should pass if a given value is an object (not an array or instance of Object)', () => {
        const resultFromString = Validator.isObject('This is a string, that should return false')
        expect(resultFromString).toBeDefined()
        expect(resultFromString).toBeFalsy()

        const resultFromNumber = Validator.isObject(1)
        expect(resultFromNumber).toBeDefined()
        expect(resultFromNumber).toBeFalsy()

        const resultFromFunction = Validator.isObject(() => 'This is a function that should return false')
        expect(resultFromFunction).toBeDefined()
        expect(resultFromFunction).toBeFalsy()

        const resultFromArray = Validator.isObject(['This is an array, that should return false'])
        expect(resultFromArray).toBeDefined()
        expect(resultFromArray).toBeFalsy()

        const resultFromObject = Validator.isObject({ title: 'This is an object, that should return true' })
        expect(resultFromObject).toBeDefined()
        expect(resultFromObject).toBeTruthy()
    })
})

describe('Validator.isTypeOf', () => {
    it('Should pass if a given value is of the type that is specified', () => {
        const resultFromString = Validator.isTypeOf('This is a string', 'string')
        expect(resultFromString).toBeDefined()
        expect(resultFromString).toBeTruthy()
    })
})

describe('Validator.isTruthyArray', () => {
    it('Should pass if a given value is of type array and is not empty', () => {
        const resultFromString = Validator.isTruthyArray('This is a string')
        expect(resultFromString).toBeDefined()
        expect(resultFromString).toBeFalsy()

        const resultFromEmptyArray = Validator.isTruthyArray([])
        expect(resultFromEmptyArray).toBeDefined()
        expect(resultFromEmptyArray).toBeFalsy()

        const resultFromFilledArray = Validator.isTruthyArray([ 1, 2, 3 ])
        expect(resultFromFilledArray).toBeDefined()
        expect(resultFromFilledArray).toBeTruthy()
    })
})

describe('Validator.isSvgElement', () => {
    it('Should pass if a given value can be used to create an svg element with document.createElementNS', () => {
        const resultFromAnimate = Validator.isSvgElement('animate')
        expect(resultFromAnimate).toBeDefined()
        expect(resultFromAnimate).toBeTruthy()

        const resultFromAnimateMotion = Validator.isSvgElement('animateMotion')
        expect(resultFromAnimateMotion).toBeDefined()
        expect(resultFromAnimateMotion).toBeTruthy()

        const resultFromAnimateTransform = Validator.isSvgElement('animateTransform')
        expect(resultFromAnimateTransform).toBeDefined()
        expect(resultFromAnimateTransform).toBeTruthy()

        const resultFromCircle = Validator.isSvgElement('circle')
        expect(resultFromCircle).toBeDefined()
        expect(resultFromCircle).toBeTruthy()

        const resultFromClipPath = Validator.isSvgElement('clipPath')
        expect(resultFromClipPath).toBeDefined()
        expect(resultFromClipPath).toBeTruthy()

        const resultFromColor = Validator.isSvgElement('color-profile')
        expect(resultFromColor).toBeDefined()
        expect(resultFromColor).toBeTruthy()

        const resultFromDefs = Validator.isSvgElement('defs')
        expect(resultFromDefs).toBeDefined()
        expect(resultFromDefs).toBeTruthy()

        const resultFromDesc = Validator.isSvgElement('desc')
        expect(resultFromDesc).toBeDefined()
        expect(resultFromDesc).toBeTruthy()

        const resultFromDiscard = Validator.isSvgElement('discard')
        expect(resultFromDiscard).toBeDefined()
        expect(resultFromDiscard).toBeTruthy()

        const resultFromEllipse = Validator.isSvgElement('ellipse')
        expect(resultFromEllipse).toBeDefined()
        expect(resultFromEllipse).toBeTruthy()

        const resultFromFeBlend = Validator.isSvgElement('feBlend')
        expect(resultFromFeBlend).toBeDefined()
        expect(resultFromFeBlend).toBeTruthy()

        const resultFromFeColorMatrix = Validator.isSvgElement('feColorMatrix')
        expect(resultFromFeColorMatrix).toBeDefined()
        expect(resultFromFeColorMatrix).toBeTruthy()

        const resultFromFeComponentTransfer = Validator.isSvgElement('feComponentTransfer')
        expect(resultFromFeComponentTransfer).toBeDefined()
        expect(resultFromFeComponentTransfer).toBeTruthy()

        const resultFromFeComposite = Validator.isSvgElement('feComposite')
        expect(resultFromFeComposite).toBeDefined()
        expect(resultFromFeComposite).toBeTruthy()

        const resultFromFeConvolveMatrix = Validator.isSvgElement('feConvolveMatrix')
        expect(resultFromFeConvolveMatrix).toBeDefined()
        expect(resultFromFeConvolveMatrix).toBeTruthy()

        const resultFromFeDiffuseLighting = Validator.isSvgElement('feDiffuseLighting')
        expect(resultFromFeDiffuseLighting).toBeDefined()
        expect(resultFromFeDiffuseLighting).toBeTruthy()

        const resultFromFeDisplacementMap = Validator.isSvgElement('feDisplacementMap')
        expect(resultFromFeDisplacementMap).toBeDefined()
        expect(resultFromFeDisplacementMap).toBeTruthy()

        const resultFromFeDistantLight = Validator.isSvgElement('feDistantLight')
        expect(resultFromFeDistantLight).toBeDefined()
        expect(resultFromFeDistantLight).toBeTruthy()

        const resultFromFeDropShadow = Validator.isSvgElement('feDropShadow')
        expect(resultFromFeDropShadow).toBeDefined()
        expect(resultFromFeDropShadow).toBeTruthy()

        const resultFromFeFlood = Validator.isSvgElement('feFlood')
        expect(resultFromFeFlood).toBeDefined()
        expect(resultFromFeFlood).toBeTruthy()

        const resultFromFeFuncA = Validator.isSvgElement('feFuncA')
        expect(resultFromFeFuncA).toBeDefined()
        expect(resultFromFeFuncA).toBeTruthy()

        const resultFromFeFuncB = Validator.isSvgElement('feFuncB')
        expect(resultFromFeFuncB).toBeDefined()
        expect(resultFromFeFuncB).toBeTruthy()

        const resultFromFeFuncG = Validator.isSvgElement('feFuncG')
        expect(resultFromFeFuncG).toBeDefined()
        expect(resultFromFeFuncG).toBeTruthy()

        const resultFromFeFuncR = Validator.isSvgElement('feFuncR')
        expect(resultFromFeFuncR).toBeDefined()
        expect(resultFromFeFuncR).toBeTruthy()

        const resultFromFeGaussianBlur = Validator.isSvgElement('feGaussianBlur')
        expect(resultFromFeGaussianBlur).toBeDefined()
        expect(resultFromFeGaussianBlur).toBeTruthy()

        const resultFromFeImage = Validator.isSvgElement('feImage')
        expect(resultFromFeImage).toBeDefined()
        expect(resultFromFeImage).toBeTruthy()

        const resultFromFeMerge = Validator.isSvgElement('feMerge')
        expect(resultFromFeMerge).toBeDefined()
        expect(resultFromFeMerge).toBeTruthy()

        const resultFromFeMergeNode = Validator.isSvgElement('feMergeNode')
        expect(resultFromFeMergeNode).toBeDefined()
        expect(resultFromFeMergeNode).toBeTruthy()

        const resultFromFeMorphology = Validator.isSvgElement('feMorphology')
        expect(resultFromFeMorphology).toBeDefined()
        expect(resultFromFeMorphology).toBeTruthy()

        const resultFromFeOffset = Validator.isSvgElement('feOffset')
        expect(resultFromFeOffset).toBeDefined()
        expect(resultFromFeOffset).toBeTruthy()

        const resultFromFePointLight = Validator.isSvgElement('fePointLight')
        expect(resultFromFePointLight).toBeDefined()
        expect(resultFromFePointLight).toBeTruthy()

        const resultFromFeSpecularLighting = Validator.isSvgElement('feSpecularLighting')
        expect(resultFromFeSpecularLighting).toBeDefined()
        expect(resultFromFeSpecularLighting).toBeTruthy()

        const resultFromFeSpotLight = Validator.isSvgElement('feSpotLight')
        expect(resultFromFeSpotLight).toBeDefined()
        expect(resultFromFeSpotLight).toBeTruthy()

        const resultFromFeTile = Validator.isSvgElement('feTile')
        expect(resultFromFeTile).toBeDefined()
        expect(resultFromFeTile).toBeTruthy()

        const resultFromFeTurbulence = Validator.isSvgElement('feTurbulence')
        expect(resultFromFeTurbulence).toBeDefined()
        expect(resultFromFeTurbulence).toBeTruthy()

        const resultFromFilter = Validator.isSvgElement('filter')
        expect(resultFromFilter).toBeDefined()
        expect(resultFromFilter).toBeTruthy()

        const resultFromForeignObject = Validator.isSvgElement('foreignObject')
        expect(resultFromForeignObject).toBeDefined()
        expect(resultFromForeignObject).toBeTruthy()

        const resultFromG = Validator.isSvgElement('g')
        expect(resultFromG).toBeDefined()
        expect(resultFromG).toBeTruthy()

        const resultFromHatch = Validator.isSvgElement('hatch')
        expect(resultFromHatch).toBeDefined()
        expect(resultFromHatch).toBeTruthy()

        const resultFromHatchpath = Validator.isSvgElement('hatchpath')
        expect(resultFromHatchpath).toBeDefined()
        expect(resultFromHatchpath).toBeTruthy()

        const resultFromImage = Validator.isSvgElement('image')
        expect(resultFromImage).toBeDefined()
        expect(resultFromImage).toBeTruthy()

        const resultFromLine = Validator.isSvgElement('line')
        expect(resultFromLine).toBeDefined()
        expect(resultFromLine).toBeTruthy()

        const resultFromLinearGradient = Validator.isSvgElement('linearGradient')
        expect(resultFromLinearGradient).toBeDefined()
        expect(resultFromLinearGradient).toBeTruthy()

        const resultFromMarker = Validator.isSvgElement('marker')
        expect(resultFromMarker).toBeDefined()
        expect(resultFromMarker).toBeTruthy()

        const resultFromMask = Validator.isSvgElement('mask')
        expect(resultFromMask).toBeDefined()
        expect(resultFromMask).toBeTruthy()

        const resultFromMesh = Validator.isSvgElement('mesh')
        expect(resultFromMesh).toBeDefined()
        expect(resultFromMesh).toBeTruthy()

        const resultFromMeshgradient = Validator.isSvgElement('meshgradient')
        expect(resultFromMeshgradient).toBeDefined()
        expect(resultFromMeshgradient).toBeTruthy()

        const resultFromMeshpatch = Validator.isSvgElement('meshpatch')
        expect(resultFromMeshpatch).toBeDefined()
        expect(resultFromMeshpatch).toBeTruthy()

        const resultFromMeshrow = Validator.isSvgElement('meshrow')
        expect(resultFromMeshrow).toBeDefined()
        expect(resultFromMeshrow).toBeTruthy()

        const resultFromMetadata = Validator.isSvgElement('metadata')
        expect(resultFromMetadata).toBeDefined()
        expect(resultFromMetadata).toBeTruthy()

        const resultFromMpath = Validator.isSvgElement('mpath')
        expect(resultFromMpath).toBeDefined()
        expect(resultFromMpath).toBeTruthy()

        const resultFromPath = Validator.isSvgElement('path')
        expect(resultFromPath).toBeDefined()
        expect(resultFromPath).toBeTruthy()

        const resultFromPattern = Validator.isSvgElement('pattern')
        expect(resultFromPattern).toBeDefined()
        expect(resultFromPattern).toBeTruthy()

        const resultFromPolygon = Validator.isSvgElement('polygon')
        expect(resultFromPolygon).toBeDefined()
        expect(resultFromPolygon).toBeTruthy()

        const resultFromPolyline = Validator.isSvgElement('polyline')
        expect(resultFromPolyline).toBeDefined()
        expect(resultFromPolyline).toBeTruthy()

        const resultFromRadialGradient = Validator.isSvgElement('radialGradient')
        expect(resultFromRadialGradient).toBeDefined()
        expect(resultFromRadialGradient).toBeTruthy()

        const resultFromRect = Validator.isSvgElement('rect')
        expect(resultFromRect).toBeDefined()
        expect(resultFromRect).toBeTruthy()

        const resultFromScript = Validator.isSvgElement('script')
        expect(resultFromScript).toBeDefined()
        expect(resultFromScript).toBeTruthy()

        const resultFromSet = Validator.isSvgElement('set')
        expect(resultFromSet).toBeDefined()
        expect(resultFromSet).toBeTruthy()

        const resultFromSolidcolor = Validator.isSvgElement('solidcolor')
        expect(resultFromSolidcolor).toBeDefined()
        expect(resultFromSolidcolor).toBeTruthy()

        const resultFromStop = Validator.isSvgElement('stop')
        expect(resultFromStop).toBeDefined()
        expect(resultFromStop).toBeTruthy()

        const resultFromStyle = Validator.isSvgElement('style')
        expect(resultFromStyle).toBeDefined()
        expect(resultFromStyle).toBeTruthy()

        const resultFromSvg = Validator.isSvgElement('svg')
        expect(resultFromSvg).toBeDefined()
        expect(resultFromSvg).toBeTruthy()

        const resultFromSwitch = Validator.isSvgElement('switch')
        expect(resultFromSwitch).toBeDefined()
        expect(resultFromSwitch).toBeTruthy()

        const resultFromSymbol = Validator.isSvgElement('symbol')
        expect(resultFromSymbol).toBeDefined()
        expect(resultFromSymbol).toBeTruthy()

        const resultFromText = Validator.isSvgElement('text')
        expect(resultFromText).toBeDefined()
        expect(resultFromText).toBeTruthy()

        const resultFromTextPath = Validator.isSvgElement('textPath')
        expect(resultFromTextPath).toBeDefined()
        expect(resultFromTextPath).toBeTruthy()

        const resultFromTitle = Validator.isSvgElement('title')
        expect(resultFromTitle).toBeDefined()
        expect(resultFromTitle).toBeTruthy()

        const resultFromTspan = Validator.isSvgElement('tspan')
        expect(resultFromTspan).toBeDefined()
        expect(resultFromTspan).toBeTruthy()

        const resultFromUnknown = Validator.isSvgElement('unknown')
        expect(resultFromUnknown).toBeDefined()
        expect(resultFromUnknown).toBeTruthy()

        const resultFromUse = Validator.isSvgElement('use')
        expect(resultFromUse).toBeDefined()
        expect(resultFromUse).toBeTruthy()

        const resultFromView = Validator.isSvgElement('view')
        expect(resultFromView).toBeDefined()
        expect(resultFromView).toBeTruthy()

    })
})
