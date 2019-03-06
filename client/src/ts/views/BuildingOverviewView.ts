import { M } from '../utils/Engine'
import obaLocations from '../../../public/data/obaLocations.json'
import { BuildingsGeoJson } from '../types/GeoJson'
import { PageHeader } from '../components/Chrome/PageHeader'
import { WrapView } from '../components/Core/DataDisplay/WrapView'
import { Heading } from '../components/Core/DataDisplay/Text/Heading'
import { SubZeroFloor } from '../components/Floors/Oosterdok/SubZeroFloor'
import { Anchor } from '../components/Core/DataDisplay/Text/Anchor'
import { SecondFloor } from '../components/Floors/Oosterdok/SecondFloor'
import { HorizontalScroll } from '../components/Generic/HorizontalScroll'

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

        if (!locationAddress || !id) {
            return
        }

        M.render(new PageHeader({ router, children: [] }), host)

        if (id === '15') {
            M.render(
                new WrapView({
                    children: [
                        new Heading({
                            children: [locationName],
                            level: 2,
                        }),
                        new HorizontalScroll({
                            children: [
                                new SubZeroFloor({ id, router, host }),
                                new SecondFloor({ id, router, host }),
                            ],
                        }),
                    ],
                }),
                host
            )
        } else {
            M.render(new WrapView({
                children: [
                    new Heading({
                        children: ['Helaas, deze locatie heeft nog geen plattegronden.'],
                        level: 2,
                    }),
                    new Anchor({
                        children: ['U kunt hier klikken om terug te gaan.'],
                        onClick: () => router.navigate('/'),
                    }),
                ],
            }), host)
        }
    }
}
