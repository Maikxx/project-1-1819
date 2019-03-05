import { M } from '../../utils/Engine'
import obaLocations from '../../../../public/data/obaLocations.json'
import { BuildingsGeoJson } from '../../types/GeoJson'
import { PageHeader } from '../../components/Chrome/PageHeader'
import { WrapView } from '../../components/Core/DataDisplay/WrapView'
import { Heading } from '../../components/Core/DataDisplay/Text/Heading'
import { Suggestions } from '../../components/Generic/Suggestions'

interface Props {
    host: HTMLElement
    router: Navigo
    id: string
    query: string
}

export class SuggestionsView {
    constructor(private props: Props) {
        this.render()
    }

    public async render() {
        const { host, id, router, query } = this.props
        const location = (obaLocations as BuildingsGeoJson).features.find(feature => id === feature.properties.id)
        const locationAddress = location && location.properties.address
        const locationName = location && location.properties.name

        if (!locationAddress) {
            return
        }

        M.render(new PageHeader({ router, children: [] }), host)
        M.toggleLoader(host)

        M.render(
            new WrapView({
                children: [
                    new Heading({
                        children: [locationName],
                        level: 2,
                    }),
                    new Suggestions({ id, query, host }),
                ],
            }),
            host
        )
    }
}
