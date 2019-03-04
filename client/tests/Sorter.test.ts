import { Sorter } from '../src/ts/utils/Sorter'

describe('Sorter.sortByObjectKey', () => {
    it('Should sort an array of objects in ascending order by a given key', () => {
        const testData = [ { id: 1 }, { id: 3 }, { id: 2 } ]
        const result = testData.sort(Sorter.sortByObjectKey('id'))

        expect(result).toBeDefined()
        expect(result).toHaveLength(3)
        expect(result).toEqual([ { id: 1 }, { id: 2 }, { id: 3 } ])
    })
})
