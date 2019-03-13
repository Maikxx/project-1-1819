import { Component } from '../../utils/Component'
import { M } from '../../utils/Engine'
import { Paragraph } from '../Core/DataDisplay/Text/Paragraph'
import { Heading } from '../Core/DataDisplay/Text/Heading'
import { WrapView } from '../Core/DataDisplay/WrapView'

interface Props {
    className?: string
}

export class SearchExplanation extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        return new WrapView({
            className: this.getClassNames(),
            children: [
                new Heading({
                    className: `SearchExplanation__title`,
                    level: 2,
                    children: ['Doorzoek de bibliotheekcatalogus van de Openbare Bibliotheek Amsterdam'],
                }),
                new Paragraph({
                    isBlock: true,
                    id: 'button-information',
                    children: [
                        `1. Selecteer een van de beschikbare locaties op de kaart, waar u graag de collectie zou willen ontdekken.`,
                    ],
                }),
                new Paragraph({
                    isBlock: true,
                    children: [
                        `2. Vervolgens krijgt u een representatie van het gebouw te zien per etage, waar in iedere etage alle secties die bekend zijn, zijn uitgelicht.`,
                    ],
                }),
                new Paragraph({
                    isBlock: true,
                    children: [
                        `3. Als u een sectie hebt gevonden waarvan u graag suggesties krijgt, klikt u daarop.`,
                    ],
                }),
                new Paragraph({
                    isBlock: true,
                    children: [
                        `4. U krijgt nu suggesties te zien op basis van uw selectie. Hier kunt u doorklikken op een suggestie voor meer informatie.`,
                    ],
                }),
            ],
        }).render()
    }

    private getClassNames() {
        const { className } = this.props

        return M.getClassName('SearchExplanation', className)
    }
}
