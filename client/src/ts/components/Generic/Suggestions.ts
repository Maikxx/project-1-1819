import { Component } from '../../utils/Component'
import { M } from '../../utils/Engine'
import { API } from '../../../../../node_modules/oba-wrapper/js/index.js'
import { getTransformedResultFromResults, translateSuggestionKey } from '../../transformers/TransformData'
import { TransformArray } from '../../utils/TransformArray'
import { TransformedData } from '../../types/Data'
import { Paragraph } from '../Core/DataDisplay/Text/Paragraph'
import { Image } from '../Core/DataDisplay/Image'
import { Heading } from '../Core/DataDisplay/Text/Heading'
import { TransformString } from '../../utils/TransformString'
import { HorizontalScroll } from './HorizontalScroll'
import { Anchor } from '../Core/DataDisplay/Text/Anchor'

interface Props {
    id: string
    query: string
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

        M.render(new HorizontalScroll({
            className: 'Suggestions__list',
            children: suggestions.map(suggestion => {
                const children = []

                if (suggestion.image && !suggestion.image.includes('https://media')) {
                    children.push(new Image({ src: suggestion.image }))
                }

                if (suggestion.title) {
                    children.push(new Heading({
                        children: [TransformString.truncateString(suggestion.title, 50)],
                        level: 3,
                    }))
                }

                if (suggestion.author) {
                    children.push(new Paragraph({
                        className: 'SuggestionsListItem__author',
                        children: [suggestion.author],
                        isBlock: true,
                    }))
                }
                if (suggestion.summary) {
                    children.push(new Paragraph({
                        className: 'SuggestionsListItem__summary',
                        children: [TransformString.truncateString(suggestion.summary, 100)],
                        isBlock: true,
                    }))
                }

                const metaChildren = []

                if (suggestion.format) {
                    metaChildren.push(new Paragraph({
                        children: [`Type: ${translateSuggestionKey('type', suggestion.format)}`],
                    }))
                }

                if (suggestion.subject) {
                    metaChildren.push(new Paragraph({
                        children: [`Onderwerp: ${suggestion.subject}`],
                    }))
                }

                if (suggestion.series) {
                    metaChildren.push(new Paragraph({
                        children: [`Serie: ${TransformString.capitalize(suggestion.series)}`],
                    }))
                }

                if (suggestion.targetAudience) {
                    metaChildren.push(new Paragraph({
                        children: [`Doelgroep: ${translateSuggestionKey('targetAudience', suggestion.targetAudience)}`],
                    }))
                }

                children.push(M.create('div', { className: 'Suggestions__list-meta' }, metaChildren))

                return new Anchor({
                    className: `SuggestionsListItem${suggestion.detailPage ? ' SuggestionsListItem--is-clickable' : ''}`,
                    ...(suggestion.detailPage ? { href: suggestion.detailPage } : {}),
                    children,
                })
            }
        ),
        }), suggestionsElement)

        M.toggleLoader(host)
    }

    private async getSuggestions() {
        const { query } = this.props

        const api = new API({
            key: '1e19898c87464e239192c8bfe422f280',
        })
        const stream = await api.createStream(`search/${query}{50}`)

        try {
            const suggestions: any[] = await stream
                .pipe(getTransformedResultFromResults)
                .pipe(TransformArray.deepCleanArray)
                .all()

            this.renderSuggestionList(suggestions.flat())
        } catch (error) {
            console.error(error)
            throw new Error(error.message)
        }
    }
}
