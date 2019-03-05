import { M } from '../../utils/Engine'
import obaLocations from '../../../../public/data/obaLocations.json'
import { BuildingsGeoJson } from '../../types/GeoJson'
import { PageHeader } from '../../components/Chrome/PageHeader'
import { WrapView } from '../../components/Core/DataDisplay/WrapView'
import { Paragraph } from '../../components/Core/DataDisplay/Text/Paragraph'
import { Heading } from '../../components/Core/DataDisplay/Text/Heading'
import { Suggestions } from '../../components/Generic/Suggestions'

interface Props {
    host: HTMLElement
    router: Navigo
    id: string
    floorId: string
    sectionId: string
}

export class SuggestionsView {
    constructor(private props: Props) {
        this.render()
    }

    public async render() {
        const { host, id, router, floorId, sectionId } = this.props
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
                        children: [`Je hebt ${locationName} geselecteerd.`],
                        level: 2,
                    }),
                    new Paragraph({
                        children: [`${locationName} kunt u vinden op het volgende adres: ${locationAddress}`],
                        isBlock: true,
                    }),
                    new Paragraph({
                        children: [`De etage die u hebt geselecteerd is: ${floorId} en de sectie die u hebt geselecteerd is ${sectionId}.`],
                        isBlock: true,
                    }),
                    new Suggestions({ id, floorId, sectionId, host }),
                ],
            }),
            host
        )
    }
}
