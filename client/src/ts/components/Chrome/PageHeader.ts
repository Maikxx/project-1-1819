import { DefaultProps, Component } from '../../utils/Component'
import { M } from '../../utils/Engine'
import { Header } from '../Core/DataDisplay/Header'
import { List } from '../Core/DataDisplay/List'
import { ListItem } from '../Core/DataDisplay/ListItem'
import { Heading } from '../Core/DataDisplay/Text/Heading'
import { Anchor } from '../Core/DataDisplay/Text/Anchor'
import Navigo from 'navigo'
import OBA100Image from '../../../../public/assets/oba100-logo.jpg'
import { Image } from '../Core/DataDisplay/Image'
import { Search } from '../Core/DataEntry/Search'

interface Props extends DefaultProps<Props> {
    router: Navigo
    onSearch?: (value: string) => void
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

    private renderPageNav() {
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
                                    href: '#',
                                    onClick: event => {
                                        event.preventDefault()
                                        router.navigate('/')
                                    },
                                    children: [
                                        new Image({
                                            src: OBA100Image,
                                            alt: 'OBA logo',
                                            className: 'PageHeader__logo',
                                        }),
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
                this.renderSearch(),
                this.renderMetaNav(),
            ]),
        ]
    }

    private renderSearch() {
        const { onSearch } = this.props

        if (!onSearch) {
            return null
        }

        return new Search({
            onSearch: event => this.onSearch(event),
            className: 'PageHeader__search',
        })
    }

    private onSearch(event: KeyboardEvent) {
        const { onSearch } = this.props
        const { target } = event

        if (!target || !onSearch) {
            return
        }

        const { value } = (target as HTMLInputElement)

        if (event.key !== 'Enter') {
            return
        }

        onSearch(value)
    }

    private renderMetaNav() {
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
