import { M } from '../utils/Engine'
import { API } from '../../../../node_modules/oba-wrapper/js/index.js'
import obaLocations from '../../../public/data/obaLocations.json'
import { BuildingsGeoJson } from '../types/GeoJson'
import { PageHeader } from '../components/Chrome/PageHeader'
import { WrapView } from '../components/Core/DataDisplay/WrapView'
import { Heading } from '../components/Core/DataDisplay/Text/Heading'
import { Suggestions } from '../components/Generic/Suggestions'
import { getTransformedResultFromResults } from '../transformers/TransformData'
import { TransformArray } from '../utils/TransformArray'
import { Toast } from '../components/Core/Feedback/Toast'

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

    public render() {
        const { host, id, router, query } = this.props
        const location = (obaLocations as BuildingsGeoJson).features.find(feature => id === feature.properties.id)
        const locationAddress = location && location.properties.address
        const locationName = location && location.properties.name

        if (!locationAddress) {
            return
        }

        M.render(new PageHeader({ router, children: [], onSearch: value => this.onSearch(value) }), host)

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
                className: 'SuggestionsView',
            }),
            host
        )
    }

    private async onSearch(value: string) {
        const { query, id, host } = this.props

        M.toggleLoader(host)

        try {
            const api = new API({
                key: '1e19898c87464e239192c8bfe422f280',
            })
            const stream = await api.createStream(`search/${value}`)

            const suggestions: any[] = await stream
                .pipe(getTransformedResultFromResults)
                .pipe(TransformArray.deepCleanArray)
                .all()

            const oldSuggestions = document.querySelector('.Suggestions')
            const suggestionsView = document.querySelector('.SuggestionsView')

            if (!oldSuggestions || !suggestionsView) {
                return
            }

            M.resetComponent(oldSuggestions)
            M.render(new Suggestions({ suggestions: suggestions.flat(), id, query, host }), suggestionsView)
        } catch (error) {
            M.toggleLoader(host)
            M.render(new Toast({ children: [error.message], type: 'error' }), host)

            console.error(error)
            throw new Error(error.message)
        }
    }
}
