import { Component, DefaultProps } from '../../../utils/Component'
import { M } from '../../../utils/Engine'

export type TooltipStyleOverrideType = 'action' | 'default'

interface Props extends DefaultProps<Props> {
    position: {
        x: number
        y: number
    }
    styleOverride?: TooltipStyleOverrideType
}

export function showTooltip(content: string, styleOverride: TooltipStyleOverrideType, host: HTMLElement) {
    return function({ pageX, pageY }: MouseEvent) {
        M.render(new Tooltip({
            children: [content],
            position: {
                x: pageX,
                y: pageY,
            },
            styleOverride,
        }), host)
    }
}

export function hideTooltip(host: HTMLElement) {
    const tooltip = document.querySelector('.Tooltip')

    if (!tooltip) {
        return
    }

    host.removeChild(tooltip)
}

export class Tooltip extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        const { children, position: { x, y } } = this.props

        return M.create('div', {
            className: this.getClassName(),
            style: `left: ${x}px; top: ${y - 35}px;`,
        }, ...children)
    }

    private getClassName() {
        const { className, styleOverride } = this.props
        const baseClass = styleOverride
            ? `Tooltip Tooltip--${styleOverride}`
            : 'Tooltip Tooltip--default'

        return M.getClassName(baseClass, className)
    }
}
