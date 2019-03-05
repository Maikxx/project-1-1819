import { Component } from '../../../utils/Component'
import { M } from '../../../utils/Engine'
import Navigo from 'navigo'
import { FloorWrap } from '../FloorWrap'

interface Props {
    className?: string
    router: Navigo
    id: string
}

export class SubZeroFloor extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        const { router, id } = this.props

        return new FloorWrap({
            children: [
                M.create('svg', { viewBox: '0 0 2600 1593', className: 'Building' }, [
                    M.create('g', { 'data-name': 'Building' }, [
                        M.create('polygon', {
                            className: 'Building__outline',
                            points: '2.5 1590.94 217.87 304.59 2598.1 2.5 2517.34 527.98 2451.34 529.3 2450.74 738.58 2465.16 736.12 2453.26 991.42 2451.34 1141.66 2441.38 1141.66 2441.98 1249.9 2411.62 1251.34 2413.06 1588.06 2.5 1590.94',
                        }, []),
                        M.create('g', { }, [
                            M.create('polygon', {
                                'event:click': () => router.navigate(`/building/${id}/targetAudience=ageYouth`),
                                className: 'Building__clickable-shape',
                                points: '761.86 924.82 761.86 372.1 1011.34 372.1 1011.34 227.14 1609.78 152.26 1632.58 300.34 1723.66 289.78 1823.5 988.54 1853.26 988.54 1853.26 1180.54 1764.22 1180.54 1764.22 979.78 1693.9 979.78 1693.9 1195.42 1850.38 1195.42 1850.38 1240.54 1588.66 1240.54 1588.66 926.14 761.86 924.82',
                            }),
                            M.create('text', {
                                className: 'Building__text',
                                transform: 'translate(1150 650)',
                            }, ['Jeugd']),
                        ]),
                    ]),
                ]),
            ],
            title: `Etage -1`,
        }).render()
    }
}
