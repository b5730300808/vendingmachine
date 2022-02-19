import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
const DialogLayout = ({children,...props}) =>{
    const {
        title='',
        fullWidth = true,
        maxWidth = 'sm',
        nameButton = 'เติมเงิน',
        open = false,
        handleClose = () =>{},
        handleAdd = () =>{}
    } = props;
    return(
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAdd}>{nameButton}</Button>
                <Button onClick={handleClose}>{'ยกเลิก'}</Button>
            </DialogActions>
        </Dialog>
    );
}
export default DialogLayout