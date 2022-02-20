import React from 'react'
import { 
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    ListItemText
} from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HomeIcon from '@mui/icons-material/Home';
import MoneyIcon from '@mui/icons-material/Money';
import { useNavigate } from 'react-router-dom';
const DrawerLayout = (props) =>{
    const navigate = useNavigate()
    const {open,onClose} = props;
    const onClick = () =>{
        navigate('/stock')
    }
    const onClickHome = () =>{
        navigate('/')
    }
    const onClickMoneyStock = () =>{
        navigate('/moneystock')
    }
    return(
        <Drawer
            anchor={'left'}
            open={open}
            onClose={onClose}
        >
        <Divider />
            <List>
                <ListItem button onClick={onClick} key={'Stock'}>
                    <ListItemIcon>
                        <Inventory2Icon />
                    </ListItemIcon>
                    <ListItemText primary={'Stock'} />
                </ListItem>
                <ListItem button onClick={onClickHome} key={'Home'}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem button onClick={onClickMoneyStock} key={'Money Stock'}>
                    <ListItemIcon>
                        <MoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Money Stock'} />
                </ListItem>
            </List>
    </Drawer>
    );
}
export default DrawerLayout