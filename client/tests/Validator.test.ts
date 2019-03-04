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
