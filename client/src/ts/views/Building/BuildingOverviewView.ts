import { M } from '../../utils/Engine'
import obaLocations from '../../../../public/data/obaLocations.json'
import { BuildingsGeoJson } from '../../types/GeoJson'
import { PageHeader } from '../../components/Chrome/PageHeader'
import { WrapView } from '../../components/Core/DataDisplay/WrapView'

interface Props {
    host: HTMLElement
    router: Navigo
    id?: string
}

export class BuildingOverviewView {
    constructor(private props: Props) {
        this.render()
    }

    public render() {
        const { host, id, router } = this.props
        const location = (obaLocations as BuildingsGeoJson).features.find(feature => id === feature.properties.id)
        const locationAddress = location && location.properties.address
        const locationName = location && location.properties.name

        if (!locationAddress) {
            return
        }

        M.render(new PageHeader({ router, children: [] }), host)

        M.render(
            new WrapView({
                children: [
                    M.create('h1', {}, [`You have selected ${locationName} with address: ${locationAddress}`]),
                ],
            }),
            host
        )
    }
}
