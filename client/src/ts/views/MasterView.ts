import { M } from '../utils/Engine'
import { View } from '../components/Core/DataDisplay/View'
import obaLocations from '../../../public/data/obaLocations.json'
import { WorldMap } from '../components/Generic/WorldMap/WorldMap'

interface Props {
    host: HTMLElement
    router: Navigo
}

export class MasterView {
    constructor(private props: Props) {
        this.render()
    }

    public render() {
        const { host } = this.props

        M.render(
            new View({
                children: [this.renderWorldMap()],
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
