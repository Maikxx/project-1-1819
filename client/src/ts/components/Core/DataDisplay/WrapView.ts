import { Component, DefaultProps } from '../../../utils/Component'
import { View } from './View'
import { M } from '../../../utils/Engine'

interface Props extends DefaultProps<Props> {}

export class WrapView extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        const { children } = this.props

        return new View({
            className: this.getClassNames(),
            children,
        }).render()
    }

    private getClassNames() {
        const { className } = this.props

        return M.getClassName('WrapView', className)
    }
}
