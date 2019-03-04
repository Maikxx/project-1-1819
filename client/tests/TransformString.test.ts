import { TransformString } from '../src/ts/utils/TransformString'

describe('TransformString.capitalize', () => {
    it('Should capitalize a string', () => {
        const result = TransformString.capitalize('test')

        expect(result).toBeDefined()
        expect(result).toHaveLength(4)
        expect(result).toBe('Test')
    })
})

describe('TransformString.truncateString', () => {
    it('Should truncate a string correctly', () => {
        const result = TransformString.truncateString('This is a relatively long string', 8)

        expect(result).toBeDefined()
        expect(result).toHaveLength(8)
        expect(result).toBe('This ...')
    })
})
