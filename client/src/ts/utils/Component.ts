export interface DefaultProps<TProps> {
    className?: string
    children: Children<TProps>
}

export type Children<TProps> = (string | HTMLElement | SVGElement | Component<TProps>)[]

export class Component<TProps> {
    public render: () => Promise<HTMLElement> | Promise<SVGElement> | Promise<null> | HTMLElement | SVGElement | null

    // tslint:disable-next-line:no-empty
    constructor(props: TProps) {}
}
