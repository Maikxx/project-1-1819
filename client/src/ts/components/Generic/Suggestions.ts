import { Component } from '../../utils/Component'
import { M } from '../../utils/Engine'
import { List } from '../Core/DataDisplay/List'
import { ListItem } from '../Core/DataDisplay/ListItem'
import { API } from '../../../../../node_modules/oba-wrapper/js/index.js'
import { getTransformedResultFromResults, translateSuggestionKey } from '../../utils/TransformData'
import { TransformArray } from '../../utils/TransformArray'
import { TransformedData } from '../../types/Data'
import { Paragraph } from '../Core/DataDisplay/Text/Paragraph'
import { Image } from '../Core/DataDisplay/Image'
import { Heading } from '../Core/DataDisplay/Text/Heading'
import { TransformString } from '../../utils/TransformString'

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
            children: suggestions.map(suggestion => {
                const children = []

                if (suggestion.title) {
                    children.push(new Heading({
                        children: [suggestion.title],
                        level: 3,
                    }))
                }

                if (suggestion.image) {
                    children.push(new Image({ src: suggestion.image }))
                }

                if (suggestion.author) {
                    children.push(new Paragraph({
                        children: [suggestion.author],
                        isBlock: true,
                    }))
                }
                if (suggestion.summary) {
                    children.push(new Paragraph({
                        children: [suggestion.summary],
                        isBlock: true,
                    }))
                }
                if (suggestion.format) {
                    children.push(new Paragraph({
                        children: [translateSuggestionKey('type', suggestion.format)],
                        isBlock: true,
                    }))
                }
                if (suggestion.subject) {
                    children.push(new Paragraph({
                        children: [suggestion.subject],
                        isBlock: true,
                    }))
                }
                if (suggestion.series) {
                    children.push(new Paragraph({
                        children: [TransformString.capitalize(suggestion.series)],
                        isBlock: true,
                    }))
                }
                if (suggestion.targetAudience) {
                    children.push(new Paragraph({
                        children: [translateSuggestionKey('targetAudience', suggestion.targetAudience)],
                        isBlock: true,
                    }))
                }

                return new ListItem({
                    className: 'Suggestions__list-item',
                    children,
                })
            }
        ),
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
