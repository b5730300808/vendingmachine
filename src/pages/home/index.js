import React,{useState} from 'react';
import { Container,ImageList,CircularProgress,Backdrop } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tabs from './components/tab';
import Menu from './components/menu';
import PadKrapao from './../../asset/image/pad-kra-pao.jpg'
import Water from './../../asset/image/water.jpg'
import {useStockContext} from './../../reducer/stockReducer'
const Home = (props) =>{
    const [tab,setTab] = useState(0)
    const theme = useTheme(props);
    const matchesUpSM = useMediaQuery(theme.breakpoints.up('sm'));
    const stockContext =  useStockContext()
    const {
        stockBackdrop,
        stock
    } = stockContext;
    const onTab = (event, newValue) =>{
        setTab(newValue)
    }
    return(
        <>
        {
            stockBackdrop ?
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={stockBackdrop}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                    :
                    <>
                        <Tabs showLabels value={tab} onChange={onTab} {...props}/>
                        <Container>
                            <ImageList cols={matchesUpSM ? 4 : 1} gap={16}>
                                {
                                    stock.stocklist.map((item)=>(
                                        <Menu item={item}/>
                                    ))
            
                                }
                            </ImageList>
                        </Container>                
                    </>

        }
        </>
    );
}

export default Home;