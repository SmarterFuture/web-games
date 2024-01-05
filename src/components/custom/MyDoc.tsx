import { InfoOutlined } from "@mui/icons-material"
import { MyIconButton } from "./MyIconButton"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";


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
        <div className="docs">
            <Typography variant="body2">
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
                    <DialogContentText>
                        { props.children }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ closeDialog }>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )}
