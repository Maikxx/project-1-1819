import { M } from '../../../utils/Engine'
import { Component } from '../../../utils/Component'

interface Props {
    className?: string
    src?: string
}

export class Image extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        const { src } = this.props

        return M.create(
            'img',
            {
                className: this.getClassNames(),
                src,
            },
            []
        )
    }

    private getClassNames() {
        const { className } = this.props

        return M.getClassName('Image', className)
    }
}
