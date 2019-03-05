import { Component } from '../../utils/Component'
import { M } from '../../utils/Engine'
import { Paragraph } from '../Core/DataDisplay/Text/Paragraph'
import { Heading } from '../Core/DataDisplay/Text/Heading'

interface Props {
    className?: string
}

export class SearchExplanation extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        return M.create('article', { className: this.getClassNames() }, [
            new Heading({
                className: `SearchExplanation__title`,
                level: 2,
                children: ['Doorzoek de bibliotheekcatalogus van de Openbare Bibliotheek Amsterdam'],
            }),
            new Paragraph({
                isBlock: true,
                children: [
                    `1. Selecteer een locatie op de kaart hieronder waarbinnen u graag op onderzoek uit zou willen gaan.`,
                ],
            }),
            new Paragraph({
                isBlock: true,
                children: [
                    `2. Vervolgens krijgt u een representatie van het gebouw te zien per etage,${` `}
                    met binnen iedere etage alle secties die bekend zijn.`,
                ],
            }),
            new Paragraph({
                isBlock: true,
                children: [
                    `3. Als u een sectie hebt gevonden waarvan u graag suggesties krijgt,${``}
                    klikt u daarop en krijgt u de suggesties te zien die in deze bibliotheek beschikbaar zijn.`,
                ],
            }),
        ])
    }

    private getClassNames() {
        const { className } = this.props

        return M.getClassName('SearchExplanation', className)
    }
}
