import { Component } from '../../utils/Component'
import { M } from '../../utils/Engine'
import { List } from '../Core/DataDisplay/List'
import { ListItem } from '../Core/DataDisplay/ListItem'
import { API } from '../../../../../node_modules/oba-wrapper/js/index.js'
import { getTransformedResultFromResults } from '../../utils/TransformData'
import { TransformArray } from '../../utils/TransformArray'
import { TransformedData } from '../../types/Data'
import { Paragraph } from '../Core/DataDisplay/Text/Paragraph'

interface Props {
    id: string
    floorId: string
    sectionId: string
    host: HTMLElement
}

export class Suggestions extends Component<Props> {
    constructor(private props: Props) {
        super(props)

        this.getSuggestions()
    }

    public render = () => {
        return M.create('section', { className: 'Suggestions' }, [
            M.create('div', { className:  'Suggestions__placeholder' }, ''),
        ])
    }

    private renderSuggestionList(suggestions?: TransformedData[]) {
        const { host } = this.props
        const suggestionsElement = document.querySelector('.Suggestions')

        if (!suggestionsElement || !suggestions || suggestions.length === 0) {
            return
        }

        M.resetComponent(suggestionsElement)

        M.render(new List({
            className: 'Suggestions__list',
            children: suggestions.map(suggestion => new ListItem({
                className: 'Suggestions__list-item',
                children: [
                    new Paragraph({
                        children: [`Auteur: ${suggestion.author || ''}`],
                        isBlock: true,
                    }),
                    new Paragraph({
                        children: [`Bestandsformaat: ${suggestion.format || ''}`],
                        isBlock: true,
                    }),
                    new Paragraph({
                        children: [`Afbeelding: ${suggestion.image || ''}`],
                        isBlock: true,
                    }),
                    new Paragraph({
                        children: [`Serie: ${suggestion.series || ''}`],
                        isBlock: true,
                    }),
                    new Paragraph({
                        children: [`Onderwerp: ${suggestion.subject || ''}`],
                        isBlock: true,
                    }),
                    new Paragraph({
                        children: [`Omschrijving: ${suggestion.summary || ''}`],
                        isBlock: true,
                    }),
                    new Paragraph({
                        children: [`Doelgroep: ${suggestion.targetAudience || ''}`],
                        isBlock: true,
                    }),
                    new Paragraph({
                        children: [`Titel: ${suggestion.title || ''}`],
                        isBlock: true,
                    }),
                ],
            })),
        }), suggestionsElement)

        M.toggleLoader(host)
    }

    private async getSuggestions() {
        const api = new API({
            key: '1e19898c87464e239192c8bfe422f280',
        })
        const stream = await api.createStream('search/banaan{5}')

        try {
            const suggestions = await stream
                .pipe(getTransformedResultFromResults)
                .pipe(TransformArray.deepCleanArray)
                .all()

            this.renderSuggestionList(TransformArray.flatten(suggestions))
        } catch (error) {
            console.error(error)
            throw new Error(error.message)
        }
    }
}
