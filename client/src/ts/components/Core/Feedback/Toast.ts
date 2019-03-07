import { Component, DefaultProps } from '../../../utils/Component'
import { M } from '../../../utils/Engine'

export type ToastType = 'error' | 'default'

interface Props extends DefaultProps<Props> {
    type: ToastType
}

export class Toast extends Component<Props> {
    constructor(private props: Props) {
        super(props)
    }

    public render = () => {
        const { children } = this.props

        return M.create('div', {
            className: this.getClassName(),
            'event:animationend': () => this.onAnimationEnd(),
        }, children)
    }

    private onAnimationEnd() {
        const toast = document.querySelector('.Toast')
        const host = toast && toast.parentElement

        if (!toast || !host) {
            return
        }

        host.removeChild(toast)
    }

    private getClassName() {
        const { className, type } = this.props
        const baseClassName = M.getClassName('Toast', `Toast--${type}`)

        return M.getClassName(baseClassName, className)
    }
}
