import { Component, DefaultProps } from '../../../../utils/Component'
import { M } from '../../../../utils/Engine'

interface Props extends DefaultProps<Props> {
    onClick?: (event: Event) => void
    href?: string
    shouldPreventDefault?: boolean
}

export class Anchor extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        const { children, href } = this.props

        return M.create('a', {
            'event:click': this.handleClickEvent,
            className: this.getClassNames(),
            href,
        }, ...children)
    }

    private handleClickEvent = (event: Event) => {
        const { shouldPreventDefault, onClick } = this.props

        if (shouldPreventDefault) {
            event.preventDefault()
        }

        if (onClick) {
            onClick(event)
        }
    }

    private getClassNames() {
        const { className } = this.props

        return M.getClassName('Anchor', className)
    }
}
