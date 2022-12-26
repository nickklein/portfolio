interface Style {
    primary: string;
    secondary: string;
}

interface ButtonTypes {
    isButton?: boolean,
    label: string,
    href?: string,
    styleType?: string,
    target?: string,
    onClick?: React.MouseEventHandler,
}