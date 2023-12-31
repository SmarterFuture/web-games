import { styled } from '@mui/material/styles';


export const MyIcon = styled("img")(({ theme }) => ({
    height: `calc( ${ theme.typography.footer1.fontSize } * 2 )`,
    borderRadius: "50%",
    marginLeft: "1em"
}))

