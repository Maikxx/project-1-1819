export class Validator {
    public static validateDate(text: string) {
        const dateToTest = new Date(text)
        return Boolean(+dateToTest)
    }

    public static isObject(subject: any) {
        return !Array.isArray(subject) && subject === Object(subject)
    }

    public static isTypeOf(value: any, type: string) {
        return typeof value === type
    }

    public static isTruthyArray(value: any) {
        return Array.isArray(value) && value.length > 0
    }

    public static isPromise(value: any) {
        return !!value && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function'
    }
}
