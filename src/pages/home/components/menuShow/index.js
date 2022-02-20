import React from 'react';
import {ImageListItemBar,ImageListItem,Button,Box, Container} from '@mui/material';
const MenuShow = (props) =>{
    const {item} = props;
    return(
        <Container sx={{textAlign: (theme)=>theme.breakpoints.up('sm') && 'center',padding:'0px'}}>
            <ImageListItem sx={{
                    padding:(theme)=>theme.breakpoints.up('sm') && '5px',
                    width:(theme)=>theme.breakpoints.up('sm') ? '300px': '200px',
                    height:(theme)=>theme.breakpoints.up('sm') ? '300px': '200px'
                }}  
                key={item.img.url}
            >
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
            </ImageListItem>                

        </Container>
    );
}
export default MenuShow;