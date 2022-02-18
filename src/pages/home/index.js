import React,{useState} from 'react';
import { Container,ImageList } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tabs from './components/tab';
import Menu from './components/menu';
import PadKrapao from './../../asset/image/pad-kra-pao.jpg'
// const useStyles = makeStyles({
//     tabs: 4
// });
const Home = (props) =>{
    const [tab,setTab] = useState(0)
    const theme = useTheme(props);
    const matchesUpSM = useMediaQuery(theme.breakpoints.up('sm'));
    const onTab = (event, newValue) =>{
        setTab(newValue)
    }
    const itemData = [
        {
            img: PadKrapao,
            title: "Bed",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Books",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Sink",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Kitchen",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Blinds",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Chairs",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Laptop",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Doors",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Coffee",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Storage",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Candle",
            price: 10
        },
        {
            img: PadKrapao,
            title: "Coffee table",
            price: 10
        }
    ];
    return(
        <>
            <Tabs showLabels value={tab} onChange={onTab} {...props}/>
            <Container>
                <ImageList cols={matchesUpSM ? 4 : 1} gap={16}>
                    {
                        itemData.map((item)=>(
                            <Menu item={item}/>
                        ))

                    }
                </ImageList>
            </Container>
        </>
    );
}

export default Home;