import { Link, LinkProps } from "@mui/material";


export function MyLink(props: LinkProps) {
    return (
        <Link target="_blank" rel="noopener" { ...props }>
            { props.children }
        </Link>
    );
}
