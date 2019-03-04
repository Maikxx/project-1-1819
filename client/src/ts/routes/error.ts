import Navigo from 'navigo'
import { M } from '../utils/Engine'

export function handleErrorRoute(host: HTMLElement, router: Navigo) {
    return function() {
        M.resetComponent(host)

        console.error('Not found, add error page soon')
    }
}
