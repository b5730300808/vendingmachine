import React from 'react'
import { 
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    ListItemText
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
const DrawerLayout = (props) =>{
    const {open,onClose} = props;
    return(
        <Drawer
            anchor={'left'}
            open={open}
            onClose={onClose}
        >
        <Divider />
            <List>
                <ListItem button key={'Login'}>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Login'} />
                </ListItem>
            </List>
    </Drawer>
    );
}
export default DrawerLayout