import { InfoOutlined } from "@mui/icons-material"
import { MyIconButton } from "./MyIconButton"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Container } from "@mui/material";
import { useState, JSX } from "react";


interface MyDocProps {
    children: JSX.Element | string;
    title: string;
    dialogHeading: string;
}


export function MyDoc (props: MyDocProps) {
    const [dialog, setDialog] = useState<boolean>(true);

    function openDialog() {
        setDialog(true);
    }

    function closeDialog() {
        setDialog(false)
    }
    
    return (
        <Container maxWidth="xl">
            <Typography component="span" variant="body2">
                { props.title }
            </Typography>
            <MyIconButton onClick={ openDialog } size="small">
                <InfoOutlined/>
            </MyIconButton>
            <Dialog
                open = { dialog }
                onClose={ closeDialog }
            >
                <DialogTitle>
                    { props.dialogHeading } 
                </DialogTitle>
                <DialogContent>
                    <DialogContentText component="span">
                        { props.children }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ closeDialog }>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )}
