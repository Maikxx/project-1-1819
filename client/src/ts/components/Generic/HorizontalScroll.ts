import { Component, DefaultProps } from '../../utils/Component'
import { M } from '../../utils/Engine'

interface Props extends DefaultProps<Props> {
    centerItems?: boolean
}

export class HorizontalScroll extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        const { children } = this.props

        return M.create('div', { className: this.getClassName() }, ...children)
    }

    private getClassName() {
        const { className, centerItems } = this.props
        const baseClassName = `HorizontalScroll${centerItems ? ' HorizontalScroll--center-items' : ''}`

        return M.getClassName(baseClassName, className)
    }
}
