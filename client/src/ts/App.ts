import { routes } from './routes'
import Navigo from 'navigo'
import { handleErrorRoute } from './routes/error'
import { M } from './utils/Engine'
import { MasterView } from './views/MasterView'

interface Args {
    id?: string
    sid?: string
    fid?: string
}

export class App {
    constructor() {
        this.initializeRouter()
        ; (mapboxgl as any).accessToken = 'pk.eyJ1IjoibWVsa2JvZXIiLCJhIjoiY2pydDZnemZrMGk2NTQ0bnB5N2FzYnY4ZSJ9.6Rz3rv9QYard69Bd1_onig'
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
                    [routes.index]: this.handleRoute(mainElement, router, routes.index),
                    [routes.building.overview]: this.handleRoute(mainElement, router, routes.building.overview),
                    [routes.building.floorplan]: this.handleRoute(mainElement, router, routes.building.floorplan),
                    [routes.building.suggestions]: this.handleRoute(mainElement, router, routes.building.suggestions),
                    [routes.building.availability]: this.handleRoute(mainElement, router, routes.building.availability),
                })
                .notFound(handleErrorRoute(mainElement, router))

            router.resolve()
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

    private handleRoute(host: HTMLElement, router: Navigo, route: string) {
        return function({ id, fid, sid }: Args) {
            M.resetComponent(host)

            if (route === routes.index) {
                new MasterView({ router, host })
            }

            if (route === routes.building.overview) {
                // Handle building route with id
            }

            if (route === routes.building.floorplan) {
                // Handle building floorplan route with id and fid
            }

            if (route === routes.building.suggestions) {
                // Handle building floorplan suggestion route with id, fid and sid
            }

            if (route === routes.building.availability) {
                // Handle building floorplan suggestion availability route with id, fid and sid
            }
        }
    }
}
