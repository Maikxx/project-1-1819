import { TransformArray } from '../src/ts/utils/TransformArray'

describe('TransformArray.chunk', () => {
    it('Should create a multidimensional array from a single array', () => {
        const testData = [ 1, 2, 3 , 2, 4, 5 ]
        const result = TransformArray.chunk(testData, 2)

        expect(result).toBeDefined()
        expect(result).toHaveLength(3)
        expect(result).toEqual([[ 1, 2 ], [ 3, 2 ], [ 4, 5 ]])
    })
})

describe('TransformArray.flatten', () => {
    it('Should flatten an array of arrays to a single level', () => {
        const testData = [[ 1, 2, 3 ], [ 2, 4, 5 ]]
        const result = TransformArray.flatten(testData)

        expect(result).toBeDefined()
        expect(result).toHaveLength(6)
        expect(result).toEqual([ 1, 2, 3, 2, 4, 5 ])
    })
})

describe('TransformArray.flattenDeep', () => {
    it('Should flatten an array of multidimensional arrays to a single level', () => {
        const testData = [[ 1, 2, 3 ], [ 2, 4, 5, [ 2, 1 ]]]
        const result = TransformArray.flattenDeep(testData)

        expect(result).toBeDefined()
        expect(result).toHaveLength(8)
        expect(result).toEqual([ 1, 2, 3, 2, 4, 5, 2, 1 ])
    })
})

describe('TransformArray.compact', () => {
    it('Should return an array of only truthy values', () => {
        const testData = [ false, true, 0, 1, [], {}, '', 'test' ]
        const result = TransformArray.compact(testData)

        expect(result).toBeDefined()
        expect(result).toHaveLength(5)
        expect(result).toEqual([ true, 1, [], {}, 'test' ])
    })
})

describe('TransformArray.deepCleanArray', () => {
    it('Should remove falsy values from an array on a deep level', () => {
        const testData = [ false, null, [], true, [ false, true, { falsy: false, truthy: true } ]]
        const result = TransformArray.deepCleanArray(testData)

        expect(result).toBeDefined()
        expect(result).toHaveLength(2)
        expect(result).toEqual([ true, [ true, { truthy: true } ]])
    })
})

describe('TransformArray.getUniqueArrayByObjectKey', () => {
    it('Should return an array of unique objects', () => {
        const testData = [ { id: '1' }, { id: '1' }, { id: '2' } ]
        const result = TransformArray.getUniqueArrayByObjectKey(testData, 'id')

        expect(result).toBeDefined()
        expect(result).toHaveLength(2)
        expect(result).toEqual([ { id: '1' }, { id: '2' } ])
    })
})
