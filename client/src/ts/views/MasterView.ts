import { M } from '../utils/Engine'
import obaLocations from '../../../public/data/obaLocations.json'
import { WorldMap } from '../components/Generic/WorldMap'
import { PageHeader } from '../components/Chrome/PageHeader'
import { WrapView } from '../components/Core/DataDisplay/WrapView'
import { SearchExplanation } from '../components/Generic/SearchExplanation'

interface Props {
    host: HTMLElement
    router: Navigo
}

export class MasterView {
    constructor(private props: Props) {
        this.render()
    }

    public render() {
        const { host, router } = this.props

        M.render(new PageHeader({ router, children: [] }), host)

        M.render(
            new WrapView({
                children: [
                    this.renderExplanation(),
                    this.renderWorldMap(),
                ],
            }),
            host
        )
    }

    private renderExplanation = () => {
        return new SearchExplanation({})
    }

    private renderWorldMap = () => {
        const { host, router } = this.props

        return new WorldMap({
            host,
            markers: obaLocations.features,
            onMarkerClick: feature => router.navigate(`/building/${feature.properties.id}`),
        })
    }
}
