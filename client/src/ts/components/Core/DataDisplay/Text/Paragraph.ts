import { Component, DefaultProps } from '../../../../utils/Component'
import { M } from '../../../../utils/Engine'

interface Props extends DefaultProps<Props> {
    isBlock?: boolean
}

export class Paragraph extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        const { children } = this.props

        return M.create('p', {
            className: this.getClassNames(),
        }, ...children)
    }

    private getClassNames() {
        const { className, isBlock } = this.props

        const baseClassName = `Paragraph`

        return M.getClassName(isBlock ? `${baseClassName} Paragraph--is-block` : baseClassName, className)
    }
}
