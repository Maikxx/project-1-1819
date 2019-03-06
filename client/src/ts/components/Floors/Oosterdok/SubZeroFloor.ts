import { Component } from '../../../utils/Component'
import { M } from '../../../utils/Engine'
import Navigo from 'navigo'
import { FloorWrap } from '../FloorWrap'
import { hideTooltip, showTooltip } from '../../Core/Feedback/Tooltip'

interface Props {
    className?: string
    router: Navigo
    host: HTMLElement
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
                        }),
                        M.create('g', {}, [
                            M.create('polygon', {
                                'event:click': () => router.navigate(`/building/${id}/targetAudience=ageYouth`),
                                className: 'ClickableShape',
                                points: '761.86 924.82 761.86 372.1 1011.34 372.1 1011.34 227.14 1609.78 152.26 1632.58 300.34 1723.66 289.78 1823.5 988.54 1853.26 988.54 1853.26 1180.54 1764.22 1180.54 1764.22 979.78 1693.9 979.78 1693.9 1195.42 1850.38 1195.42 1850.38 1240.54 1588.66 1240.54 1588.66 926.14 761.86 924.82',
                            }),
                            M.create('text', {
                                className: 'BuildingText BuildingText--large',
                                transform: 'translate(1150 650)',
                            }, ['Jeugd']),
                        ]),
                    ]),
                    this.renderFacilities(),
                ]),
            ],
            title: `Etage -1`,
        }).render()
    }

    private renderFacilities() {
        const { host } = this.props

        return M.create('g', { 'data-name': 'Facilities' }, [
            M.create('g', {
                'data-name': 'Toilets',
                className: 'Building__facility',
                'event:mouseover': showTooltip('Toiletten', 'default', host),
                'event:mouseout': () => hideTooltip(host),
            }, [
                M.create('path', {
                    d: 'M724.57,1365.75a3.44,3.44,0,0,0-3.29-2.15c-.7,0-.76,0-1.18,0H707.59a3.25,3.25,0,0,0-3.29,2.13l-6,18.39A3,3,0,0,0,700,1388a3,3,0,0,0,3.83-1.76l1.61-4.33s.11-.43.11,1.47v25.54a4,4,0,1,0,8,0v-16.68a.13.13,0,0,1,.13-.15h1.51c.14,0,.14.15.14.15v16.68a4,4,0,1,0,8,0v-25.54c0-1.93.17-1.32.17-1.32l1.55,4.18a3,3,0,0,0,3.83,1.76,3,3,0,0,0,1.74-3.86Z',
                }),
                M.create('ellipse', {
                    cx: '714.52',
                    cy: '1353.1',
                    rx: '8.59',
                    ry: '8.51',
                }),
                M.create('circle', {
                    cx: '758.36',
                    cy: '1353',
                    r: '8.59',
                }),
                M.create('path', {
                    d: 'M775.26,1383.74l-7.33-17.86c-.42-.91-.79-2.11-2.52-2.11h-13a3.37,3.37,0,0,0-3.11,2.13l-7.61,17.72a3,3,0,0,0,1.35,4,3,3,0,0,0,4-1.37l.57-1.18s.18-.32.11,0c-.41,2.19-1.56,8.75-1.56,8.75a2,2,0,0,0,2,2.49h3.32c.24,0,.19.18.19.18v13.2a3.09,3.09,0,1,0,6.16,0v-13.26a.11.11,0,0,1,.13-.12h.83c.12,0,.1.14.1.14v13.24a3.09,3.09,0,1,0,6.16,0v-13.17s0-.21.23-.21h3.57a2,2,0,0,0,2.08-2.5s-1.15-7-1.46-9c-.08-.55.83,1.4.83,1.4a2.5,2.5,0,0,0,3.53,1.43A3,3,0,0,0,775.26,1383.74Z',
                }),
                M.create('path', {
                    d: 'M738.24,1411.49a1.49,1.49,0,0,1-1.48,1.48h-.63a1.49,1.49,0,0,1-1.48-1.48V1346.8a1.48,1.48,0,0,1,1.48-1.47h.63a1.48,1.48,0,0,1,1.48,1.47Z',
                }),
            ]),
            M.create('g', {
                'data-name': 'Elevators',
                className: 'Building__facility',
                'event:mouseover': showTooltip('Lift', 'default', host),
                'event:mouseout': () => hideTooltip(host),
            }, [
                M.create('path', {
                    d: 'M1034.26,1531.76h-28.42a4.35,4.35,0,0,0-4.34,4.34v33.53a4.35,4.35,0,0,0,4.34,4.34h28.42a4.35,4.35,0,0,0,4.34-4.34V1536.1A4.35,4.35,0,0,0,1034.26,1531.76Zm-22.86,39.74v-26.25a1.78,1.78,0,0,1,1.78-1.78h5.64v28Zm9.89,0v-28h5.64a1.78,1.78,0,0,1,1.78,1.78v26.25Zm14.84-1.87a1.87,1.87,0,0,1-1.87,1.87h-3.08v-26.25a4.25,4.25,0,0,0-4.25-4.25h-13.75a4.25,4.25,0,0,0-4.26,4.25v26.25h-3.08a1.87,1.87,0,0,1-1.86-1.87V1536.1a1.86,1.86,0,0,1,1.86-1.86h28.42a1.87,1.87,0,0,1,1.87,1.86Z',
                }),
                M.create('path', {
                    d: 'M839.21,1506H810.79a4.35,4.35,0,0,0-4.34,4.34v33.53a4.35,4.35,0,0,0,4.34,4.34h28.42a4.35,4.35,0,0,0,4.34-4.34v-33.53A4.35,4.35,0,0,0,839.21,1506Zm-22.87,39.73v-26.24a1.79,1.79,0,0,1,1.79-1.78h5.63v28Zm9.9,0v-28h5.63a1.79,1.79,0,0,1,1.79,1.78v26.24Zm14.83-1.86a1.86,1.86,0,0,1-1.86,1.86h-3.08v-26.24a4.26,4.26,0,0,0-4.26-4.26H818.13a4.26,4.26,0,0,0-4.26,4.26v26.24h-3.08a1.86,1.86,0,0,1-1.86-1.86v-33.53a1.87,1.87,0,0,1,1.86-1.87h28.42a1.87,1.87,0,0,1,1.86,1.87Z',
                }),
                M.create('path', {
                    d: 'M767.41,1506H739a4.35,4.35,0,0,0-4.34,4.34v33.53a4.35,4.35,0,0,0,4.34,4.34h28.42a4.35,4.35,0,0,0,4.34-4.34v-33.53A4.35,4.35,0,0,0,767.41,1506Zm-22.87,39.73v-26.24a1.79,1.79,0,0,1,1.79-1.78H752v28Zm9.9,0v-28h5.63a1.79,1.79,0,0,1,1.79,1.78v26.24Zm14.83-1.86a1.86,1.86,0,0,1-1.86,1.86h-3.08v-26.24a4.26,4.26,0,0,0-4.26-4.26H746.33a4.26,4.26,0,0,0-4.26,4.26v26.24H739a1.86,1.86,0,0,1-1.86-1.86v-33.53a1.87,1.87,0,0,1,1.86-1.87h28.42a1.87,1.87,0,0,1,1.86,1.87Z',
                }),
            ]),
        ])
    }
}
