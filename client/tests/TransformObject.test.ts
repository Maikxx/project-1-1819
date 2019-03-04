import { TransformObject } from '../src/ts/utils/TransformObject'

describe('TransformObject.deepCleanObject', () => {
    it('Should remove falsy values from an object on a deep level', () => {
        const testData = { id: '1', fakeString: 'false', emptyArray: [] }
        const result = TransformObject.deepCleanObject(testData)

        expect(result).toBeDefined()
        expect(result).toEqual({ id: '1', fakeString: 'false' })
    })
})
