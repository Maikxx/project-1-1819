import { Component, DefaultProps } from '../../../utils/Component'
import { M } from '../../../utils/Engine'

interface Props extends DefaultProps<Props> {
    position: {
        x: number
        y: number
    }
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
        const { className } = this.props

        return M.getClassName('Tooltip', className)
    }
}
