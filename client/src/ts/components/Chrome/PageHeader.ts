import { DefaultProps, Component } from '../../utils/Component'
import { M } from '../../utils/Engine'
import { Header } from '../Core/DataDisplay/Header'
import { List } from '../Core/DataDisplay/List'
import { ListItem } from '../Core/DataDisplay/ListItem'
import { Heading } from '../Core/DataDisplay/Text/Heading'
import { Anchor } from '../Core/DataDisplay/Text/Anchor'
import Navigo from 'navigo'

interface Props extends DefaultProps<Props> {
    router: Navigo
}

export class PageHeader extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        return new Header({
            children: this.renderPageNav(),
            className: this.getClassNames(),
        }).render()
    }

    private renderPageNav = () => {
        const { router } = this.props

        return [
            M.create('nav', { className: 'PageHeader__nav' }, [
                new List({
                    className: 'PageHeader__nav-list',
                    children: [
                        new ListItem({
                            className: 'PageHeader__nav-list-item',
                            children: [
                                new Anchor({
                                    className: 'PageHeader__nav-link',
                                    onClick: () => router.navigate('/'),
                                    children: [
                                        new Heading({
                                            className: 'PageHeader__title',
                                            children: ['OBA'],
                                            level: 1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                this.renderMetaNav(),
            ]),
        ]
    }

    private renderMetaNav = () => {
        return new List({
            className: 'PageHeader__meta-nav',
            children: [
                new ListItem({
                    className: 'PageHeader__meta-nav-list-item',
                    children: [
                        new Anchor({
                            className: 'PageHeader__meta-nav-link',
                            href: 'https://www.oba.nl/veelgestelde-vragen.html',
                            children: ['FAQ'],
                        }),
                    ],
                }),
                new ListItem({
                    className: 'PageHeader__meta-nav-list-item',
                    children: [
                        new Anchor({
                            className: 'PageHeader__meta-nav-link',
                            href: 'https://www.oba.nl/contactgegevens.html',
                            children: ['Contact'],
                        }),
                    ],
                }),
                new ListItem({
                    className: 'PageHeader__meta-nav-list-item',
                    children: [
                        new Anchor({
                            className: 'PageHeader__meta-nav-link',
                            href: 'https://www.oba.nl/service/lidmaatschap-en-tarieven/word-lid.html',
                            children: ['Word lid'],
                        }),
                    ],
                }),
            ],
        })
    }

    private getClassNames() {
        const { className } = this.props

        return M.getClassName('PageHeader', className)
    }
}
