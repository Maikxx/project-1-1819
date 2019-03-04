import { routes } from './routes'
import Navigo from 'navigo'
import { handleErrorRoute } from './routes/error'
import { M } from './utils/Engine'

interface Args {
    id?: string
    sid?: string
    fid?: string
}

export class App {
    constructor() {
        this.initializeRouter()
    }

    private initializeRouter() {
        const mainElement = document.querySelector('main') as HTMLElement
        const router = new Navigo(null, true, '#')

        if (!mainElement) {
            throw new Error(`
                Root element not found in the document.${` `}
                You might have forgotten to change the root element or it is not yet loaded.
            `)
        }

        try {
            router
                .on({
                    [routes.index]: this.handleRoute(mainElement, router),
                })
                .notFound(handleErrorRoute(mainElement, router))

            router.resolve()
        } catch (error) {
            handleErrorRoute(mainElement, router)

            console.error(error)
            throw new Error(error)
        }
    }

    private handleRoute(host: HTMLElement, router: Navigo) {
        return function({ id, fid, sid }: Args) {
            M.resetComponent(host)
        }
    }
}
