import React from 'react';
import {ImageListItemBar,ImageListItem,Button,Box} from '@mui/material';
const Menu = (props) =>{
    const {item} = props;
    return(
        <>
            <ImageListItem sx={{backgroundColor:"#f8f0ec",padding:'5px'}}  key={item.img}>
                <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                />                       
                <ImageListItemBar
                    title={item.title}
                    subtitle={<span>ราคา: {item.price} บาท</span>}
                    position="below"
                />     
                <Box>
                    <Button fullWidth>{"Add"}</Button>                    
                </Box>            
            </ImageListItem>                

        </>
    );
}
export default Menu;