import { Component, DefaultProps } from '../../utils/Component'
import { M } from '../../utils/Engine'
import { Heading } from '../Core/DataDisplay/Text/Heading'

interface Props extends DefaultProps<Props> {
    title: string
}

export class FloorWrap extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        const { children, title } = this.props

        return M.create('div', { className: this.getClassNames() }, [
            new Heading({
                children: [title],
                className: `FloorWrap__title`,
                level: 3,
            }),
            ...children,
        ])
    }

    private getClassNames() {
        const { className } = this.props

        return M.getClassName('FloorWrap', className)
    }
}
