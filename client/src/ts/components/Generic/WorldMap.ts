import { Component } from '../../utils/Component'
import { M } from '../../utils/Engine'
import { Feature } from '../../types/GeoJson'

interface Props {
    host: HTMLElement
    markers?: Feature[]
    onMarkerClick?: (feature: Feature) => void
}

export class WorldMap extends Component<Props> {
    private mutationObserver: MutationObserver

    constructor(private props: Props) {
        super(props)

        this.mutationObserver = new MutationObserver(this.observeMap())
        this.mutationObserver.observe(props.host, { childList: true, subtree: true })
    }

    public render = () => {
        return M.create('div', { id: `map-root`, className: 'WorldMap' })
    }

    private observeMap = () => {
        const { host } = this.props

        return (mutations => {
            const match = mutations.find(mutation => mutation.target === host)

            if (match) {
                this.createMap()
                this.mutationObserver.disconnect()
            }
        }) as MutationCallback
    }

    private createMap = () => {
        const { markers, onMarkerClick } = this.props

        const map = new mapboxgl.Map({
            container: 'map-root',
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [ 4.895168, 52.370216 ],
            zoom: 10,
        })

        if (markers && markers.length > 0) {
            markers.forEach((feature: Feature) => {
                const isActive = feature.properties.isActive
                const markerBaseName = `WorldMapMarker`
                const marker = M.create('div', {
                    className: isActive
                        ? markerBaseName
                        : `${markerBaseName} ${markerBaseName}--is-inactive`,
                    'event:click': () => {
                        if (isActive && onMarkerClick) {
                            onMarkerClick(feature)
                        }
                    },
                })

                new mapboxgl.Marker(marker)
                    .setLngLat(feature.geometry.coordinates)
                    .addTo(map)
            })
        }
    }
}
