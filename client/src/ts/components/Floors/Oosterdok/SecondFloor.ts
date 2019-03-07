import { Component } from '../../../utils/Component'
import { FloorWrap } from '../FloorWrap'
import { M } from '../../../utils/Engine'
import { showTooltip, hideTooltip } from '../../Core/Feedback/Tooltip'

interface Props {
    className?: string
    router: Navigo
    host: HTMLElement
    id: string
}

export class SecondFloor extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        return new FloorWrap({
            children: [
                M.create('svg', {
                    viewBox: '0 0 1841.53 1087.29', className: 'Building' }, [
                        M.create('g', { 'data-name': 'Building' }, [
                            M.create('polygon', {
                                className: 'Building__outline',
                                points: '150.93 502.13 101.37 491.49 101.37 504.65 22.89 515.62 2.5 364.43 7.05 342.09 100.15 342.09 100.15 415.93 165.65 432.07 186.68 342.09 248.17 341.27 265.23 271.41 224.94 260.68 228.51 244.52 245.74 249.31 246.74 244.52 309.84 261.33 389.69 271.73 470.29 275.9 550.88 274.25 628.38 270.11 709.22 263.2 787.77 252.97 865.6 239.72 941.21 223.34 1018.3 204.79 1094.4 182.63 1165.4 158.77 1167.7 163.28 1177.6 160.76 1242 665.43 1413.2 666.81 1408.9 35 1577.6 15.17 1839 2.5 1711.3 1054.1 1460.2 1055.7 1462.2 849.68 1267.8 854.07 1289.8 1023.9 1025.6 1053.5 875.84 1050.8 675.14 1026.7 466.79 985.43 452.74 1015.7 469.31 1016 469.55 1084.8 170.02 1084.8 180.74 1012.6 222.99 1014.8 222.42 940.38 59.72 896.46',
                            }),
                            this.renderBooks(),
                            this.renderFacilities(),
                            this.renderText(),
                        ]),
                    ]),
            ],
            title: `Etage 2`,
        }).render()
    }

    private renderBooks() {
        const { router, id, host } = this.props
        const baseForwardUrl = `/building/${id}`

        return M.create('g', { 'data-name': 'Books' }, [
            M.create('g', { 'data-name': 'other' }, [
                M.create('rect', {
                    transform: 'translate(1182.2 551.95) rotate(90)',
                    x: '308.21',
                    y: '820.35',
                    width: '13.81',
                    height: '93.43',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=ara&type=book`),
                    'event:mouseover': showTooltip('Arabische boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    transform: 'translate(1222.7 592.49) rotate(90)',
                    x: '308.21',
                    y: '860.9',
                    width: '13.81',
                    height: '93.43',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=rus&type=book`),
                    'event:mouseover': showTooltip('Russische boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    transform: 'translate(1062.3 1813.8) rotate(180)',
                    x: '524.26',
                    y: '860.16',
                    width: '13.81',
                    height: '93.43',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=fri&type=book`),
                    'event:mouseover': showTooltip('Friese boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    transform: 'translate(981.24 1813.8) rotate(180)',
                    x: '483.72',
                    y: '860.16',
                    width: '13.81',
                    height: '93.43',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=nor&type=book`),
                    'event:mouseover': showTooltip('Noorse boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    transform: 'translate(901.28 1789.3) rotate(180)',
                    x: '443.73',
                    y: '860.16',
                    width: '13.81',
                    height: '68.96',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=jpn&type=book`),
                    'event:mouseover': showTooltip('Japanse boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    transform: 'translate(820.19 1789.3) rotate(180)',
                    x: '403.19',
                    y: '860.16',
                    width: '13.81',
                    height: '68.96',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=cat&type=book`),
                    'event:mouseover': showTooltip('Catalaanse boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    x: '726.73',
                    y: '873.97',
                    width: '13.81',
                    height: '93.43',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=cze&type=book`),
                    'event:mouseover': showTooltip('Tsjechische boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    x: '767.27',
                    y: '873.97',
                    width: '13.81',
                    height: '93.43',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=pap&type=book`),
                    'event:mouseover': showTooltip('Papiamentse boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    x: '807.26',
                    y: '873.97',
                    width: '13.81',
                    height: '93.43',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=ice&type=book`),
                    'event:mouseover': showTooltip('IJslandse boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    x: '846.11',
                    y: '873.97',
                    width: '13.81',
                    height: '93.43',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=kor&type=book`),
                    'event:mouseover': showTooltip('Koreaanse boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
                M.create('rect', {
                    x: '885.53',
                    y: '873.97',
                    width: '13.81',
                    height: '93.43',
                    'event:click': () => router.navigate(`${baseForwardUrl}/language=tha&type=book`),
                    'event:mouseover': showTooltip('Thaise boeken', 'action', host),
                    'event:mouseout': () => hideTooltip(host),
                    className: 'ClickableShape',
                }),
            ]),
            M.create('g', {
                'data-name': 'dutch',
                className: 'ClickableShape',
                'event:click': () => router.navigate(`${baseForwardUrl}/language=dut&type=book`),
            }, [
                M.create('rect', {
                    x: '402.94',
                    y: '392.94',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '443.48',
                    y: '392.94',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '483.46',
                    y: '392.94',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '522.32',
                    y: '392.94',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '242.45',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '282.99',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '322.97',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '361.83',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '403.19',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '443.73',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '483.72',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '522.57',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '726.73',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '767.27',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '807.26',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '846.11',
                    y: '552.31',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '725.04',
                    y: '392.94',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '765.59',
                    y: '392.94',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '806.13',
                    y: '392.94',
                    width: '13.81',
                    height: '93.43',
                }),
                M.create('rect', {
                    x: '847.24',
                    y: '392.94',
                    width: '13.81',
                    height: '93.43',
                }),
            ]),
        ])
    }

    private renderFacilities() {
        const { host } = this.props

        return M.create('g', { 'data-name': 'facilities' }, [
            M.create('g', {
                'data-name': 'Elevator',
                className: 'Building__facility',
                'event:mouseover': showTooltip('Lift', 'default', host),
                'event:mouseout': () => hideTooltip(host),
            }, [
                M.create('path', {
                    d: 'M1087.34,706h-29.89a4.57,4.57,0,0,0-4.56,4.56v35.27a4.57,4.57,0,0,0,4.56,4.56h29.89a4.56,4.56,0,0,0,4.56-4.56V710.54A4.56,4.56,0,0,0,1087.34,706Zm-24,41.79v-27.6a1.88,1.88,0,0,1,1.87-1.88h5.93v29.48Zm10.4,0V718.29h5.93a1.88,1.88,0,0,1,1.87,1.88v27.6Zm15.6-2a2,2,0,0,1-2,2h-3.24v-27.6a4.48,4.48,0,0,0-4.47-4.48h-14.46a4.49,4.49,0,0,0-4.48,4.48v27.6h-3.24a2,2,0,0,1-2-2V710.54a2,2,0,0,1,2-2h29.89a2,2,0,0,1,2,2Z',
                }),
                M.create('path', {
                    d: 'M1087.34,770.75h-29.89a4.56,4.56,0,0,0-4.56,4.56v35.26a4.57,4.57,0,0,0,4.56,4.56h29.89a4.56,4.56,0,0,0,4.56-4.56V775.31A4.56,4.56,0,0,0,1087.34,770.75Zm-24,41.78v-27.6a1.87,1.87,0,0,1,1.87-1.87h5.93v29.47Zm10.4,0V783.06h5.93a1.87,1.87,0,0,1,1.87,1.87v27.6Zm15.6-2a2,2,0,0,1-2,2h-3.24v-27.6a4.47,4.47,0,0,0-4.47-4.47h-14.46a4.48,4.48,0,0,0-4.48,4.47v27.6h-3.24a2,2,0,0,1-2-2V775.31a2,2,0,0,1,2-2h29.89a2,2,0,0,1,2,2Z',
                }),
                M.create('path', {
                    d: 'M444.54,1021.93H414.66a4.57,4.57,0,0,0-4.57,4.56v35.26a4.57,4.57,0,0,0,4.57,4.56h29.88a4.56,4.56,0,0,0,4.56-4.56v-35.26A4.56,4.56,0,0,0,444.54,1021.93Zm-24,41.78v-27.6a1.87,1.87,0,0,1,1.87-1.87h5.93v29.47Zm10.4,0v-29.47h5.93a1.87,1.87,0,0,1,1.87,1.87v27.6Zm15.6-2a2,2,0,0,1-2,2H441.3v-27.6a4.47,4.47,0,0,0-4.47-4.47H422.37a4.47,4.47,0,0,0-4.47,4.47v27.6h-3.24a2,2,0,0,1-2-2v-35.26a2,2,0,0,1,2-2h29.88a2,2,0,0,1,2,2Z',
                }),
                M.create('path', {
                    d: 'M384.09,1021.93H354.2a4.56,4.56,0,0,0-4.56,4.56v35.26a4.56,4.56,0,0,0,4.56,4.56h29.89a4.57,4.57,0,0,0,4.56-4.56v-35.26A4.56,4.56,0,0,0,384.09,1021.93Zm-24,41.78v-27.6a1.87,1.87,0,0,1,1.87-1.87h5.93v29.47Zm10.4,0v-29.47h5.93a1.88,1.88,0,0,1,1.88,1.87v27.6Zm15.61-2a2,2,0,0,1-2,2h-3.24v-27.6a4.48,4.48,0,0,0-4.48-4.47H361.91a4.47,4.47,0,0,0-4.47,4.47v27.6H354.2a2,2,0,0,1-2-2v-35.26a2,2,0,0,1,2-2h29.89a2,2,0,0,1,2,2Z',
                }),
            ]),
            M.create('g', {
                'data-name': 'Toilets',
                className: 'Building__facility',
                'event:mouseover': showTooltip('Toiletten', 'default', host),
                'event:mouseout': () => hideTooltip(host),
            },
                [
                    M.create('path', {
                        d: 'M1450.23,745.5a3.76,3.76,0,0,0-3.6-2.35c-.76,0-.83,0-1.29,0h-13.69a3.56,3.56,0,0,0-3.6,2.33l-6.62,20.13a3.3,3.3,0,0,0,1.9,4.23,3.24,3.24,0,0,0,4.19-1.92l1.76-4.74s.13-.48.13,1.61v27.94a4.38,4.38,0,1,0,8.76,0V774.5a.15.15,0,0,1,.15-.17H1440c.16,0,.16.17.16.17v18.25a4.38,4.38,0,1,0,8.76,0V764.81c0-2.12.18-1.45.18-1.45l1.7,4.58a3.24,3.24,0,0,0,4.19,1.92,3.3,3.3,0,0,0,1.9-4.23Z',
                    }),
                    M.create('ellipse', {
                        cx: '1439.2',
                        cy: '731.62',
                        rx: '9.4',
                        ry: '9.31',
                    }),
                    M.create('circle', {
                        cx: '1487.2',
                        cy: '731.57',
                        r: '9.4',
                    }),
                    M.create('path', {
                        d: 'M1505.7,765.18l-8-19.54c-.46-1-.87-2.31-2.75-2.31h-14.24a3.68,3.68,0,0,0-3.4,2.33l-8.34,19.4a3.29,3.29,0,0,0,1.48,4.39,3.25,3.25,0,0,0,4.36-1.5l.62-1.29s.2-.34.13,0c-.46,2.39-1.71,9.58-1.71,9.58a2.18,2.18,0,0,0,2.22,2.72h3.63c.26,0,.21.19.21.19v14.45c0,2.42,1.51,3.68,3.37,3.68s3.37-1.26,3.37-3.68V779.13a.12.12,0,0,1,.14-.13h.91c.13,0,.11.15.11.15v14.49c0,2.42,1.51,3.68,3.37,3.68s3.37-1.26,3.37-3.68V779.23s0-.23.25-.23h3.91a2.23,2.23,0,0,0,2.27-2.73l-1.59-9.81c-.09-.6.91,1.53.91,1.53a2.73,2.73,0,0,0,3.86,1.56A3.29,3.29,0,0,0,1505.7,765.18Z',
                    }),
                    M.create('path', {
                        d: 'M1465.19,795.56a1.62,1.62,0,0,1-1.62,1.61h-.69a1.61,1.61,0,0,1-1.61-1.61v-70.8a1.62,1.62,0,0,1,1.61-1.61h.69a1.62,1.62,0,0,1,1.62,1.61Z',
                    }),
                ]
                            ),
            M.create('g', {
                'data-name': 'Elevator',
                className: 'Building__facility',
                'event:mouseover': showTooltip('Roltrap', 'default', host),
                'event:mouseout': () => hideTooltip(host),
            }, [
                M.create('path', {
                    d: 'M824.12,754.56a.9.9,0,0,0-1.26,0l-5.8,5.8a.92.92,0,0,0-.19,1,.91.91,0,0,0,.82.58h2.85v7.22a2.13,2.13,0,0,0,2.05,2.22h1.81a2.23,2.23,0,0,0,2.17-2.22V762h2.73a.93.93,0,0,0,.63-1.57Z',
                }),
                M.create('circle', {
                    cx: '810.9',
                    cy: '729.58',
                    r: '3.64',
                }),
                M.create('path', {
                    d: 'M822.38,742.46h3.82a3.95,3.95,0,1,0,0-7.89h-3.82a9.56,9.56,0,0,0-7.71,3.26l-.17.24v-1.2a2.21,2.21,0,0,0-2.28-2.14h-2.65a2.13,2.13,0,0,0-2.18,2.14v9.5l-13.57,15.92a3.3,3.3,0,0,1-1.66,1.21h-3.85a3.95,3.95,0,1,0,0,7.89h3.85a10.36,10.36,0,0,0,7.74-4l20.83-24.47A2.47,2.47,0,0,1,822.38,742.46Z',
                }),
            ]),
        ])
    }

    private renderText() {
        return M.create('g', { 'data-name': 'text' }, [
            M.create('text', {
                transform: 'translate(514.22 527.05)',
                className: 'BuildingText BuildingText--dark',
            }, ['Nederlandstalige boeken']),
            M.create('text', {
                transform: 'translate(514.22 837.89)',
                className: 'BuildingText BuildingText--dark',
            }, ['Boeken in andere talen']),
        ])
    }
}
