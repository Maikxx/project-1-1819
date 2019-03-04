import { M } from '../utils/Engine'
import { View } from '../components/Core/DataDisplay/View'
import obaLocations from '../../../public/data/obaLocations.json'
import { WorldMap } from '../components/Generic/WorldMap/WorldMap'
import { PageHeader } from '../components/Chrome/PageHeader'

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

        M.render(
            new View({
                children: [
                    new PageHeader({ router, children: [] }),
                    this.renderWorldMap(),
                ],
            }),
            host
        )
    }

    private renderWorldMap = () => {
        const { host, router } = this.props

        return new WorldMap({
            children: [],
            host,
            markers: obaLocations.features,
            onMarkerClick: feature => router.navigate(`/building/${feature.properties.id}`),
        })
    }
}
