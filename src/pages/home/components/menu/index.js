import React from 'react';
import OutOfStock from './../../../../asset/image/out-of-stock.png'
import {ImageListItemBar,ImageListItem,Button,Box} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const Menu = (props) =>{
    const {item,nameButton='ซื้อ',onClick=()=>{}} = props;
    const theme = useTheme(props);
    const matchesUpSM = useMediaQuery(theme.breakpoints.up('md'));
    return(
        <>
            <ImageListItem sx={{backgroundColor:"#f8f0ec",padding:'5px'}}  key={item.img}>
                <img
                    src={item.img.url}
                    alt={item.title}
                    loading="lazy"
                />                       
                <ImageListItemBar
                    title={item.title}
                    subtitle={<span>ราคา: {item.price} บาท</span>}
                    position="below"
                />     
                {
                    item.amount > 0 ?
                        <Box>
                            <Button onClick={onClick} fullWidth>{nameButton}</Button>                    
                        </Box>      
                        :    
                            <>
                                <Box><Button disabled fullWidth>{'Sold Out'}</Button>  </Box>            
                                <div
                                    style={{position:'absolute'}}
                                >
                                    <img src={OutOfStock} width={matchesUpSM ? '150px' : '100px'} height={matchesUpSM ? '150px' : '100px'}/>
                                </div>   
                            </>  
                }   
            </ImageListItem>                

        </>
    );
}
export default Menu;