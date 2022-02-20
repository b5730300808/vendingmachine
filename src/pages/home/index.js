import React,{useState} from 'react';
import { Container,ImageList,CircularProgress,Backdrop,Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tabs from './components/tab';
import Menu from './components/menu';
import MenuShow from './components/menuShow';
import {useStockContext} from './../../reducer/stockReducer';
import DialogLayout from '../../container/dialog';
import { AlertDialog } from '../../components/Alert';
import { useAlert } from '../../Hook/useAlert';
import { useMoneyContext } from '../../reducer/moneyReducer';
import { moneyAction } from '../../action/money.action';
const Home = (props) =>{
    const [tab,setTab] = useState(0);
    const [open,setopen] = useState(false);
    const [menu,setmenu] = useState({});
    const {alert, setalert} = useAlert();
    const moneyContext = useMoneyContext()
    const {
        money,
        setmoney
    } = moneyContext;
    const theme = useTheme(props);
    const matchesUpSM = useMediaQuery(theme.breakpoints.up('sm'));
    const stockContext =  useStockContext();
    const {
        stockBackdrop,
        stock,
        setstockBackdrop,
        check,
        setcheck
    } = stockContext;
    const onTab = (event, newValue) =>{
        setTab(newValue);
    }
    const onMenuAlert = (index) => (event) =>{
        if(stock.stocklist[index].price > money.price){
            setalert({ ...alert,text:'ยอดเงินของคุณไม่เพียงพอ กรุณาเติมเงิน',colorNotify:'warning',open: true })
        }
        else{
            setopen(true);
            setmenu(stock.stocklist[index]);
        }
    }
    const AddMenu = async() =>{
        if(!stockBackdrop){
            const status = await moneyAction.Buy(menu);
            console.log('AddMenu:',status)
            if(status.data.success){
                await setcheck(!check);
                await setalert({ ...alert,text:status.data.message,colorNotify:'success',open: true })
                await setopen(false);
            }
            else{
                await setalert({ ...alert,text:'ยอดเงินทอนไม่เพียงพอ',colorNotify:'error',open: true })
            }            
        }

    }
    const onClose = () =>{
        setopen(false);
    }
    return(
        <>
        {
            stockBackdrop ?
                <>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={stockBackdrop}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </>
                    :
                    <>
                        <AlertDialog
                            alert={alert}
                            onClose={() => setalert({ ...alert, open: false })}
                        />
                        {/* <Tabs showLabels value={tab} onChange={onTab} {...props}/> */}
                        <Container>
                            <ImageList cols={matchesUpSM ? 4 : 1} gap={16}>
                                {
                                    stock.stocklist.map((item,index)=>(
                                        <Menu item={item} onClick={onMenuAlert(index)}/>
                                    ))
                                }
                            </ImageList>
                        </Container>    
                        <DialogLayout
                            title={"ยืนยันการซื้อ"}
                            open={open}
                            handleAdd={AddMenu}
                            handleClose={onClose}
                            nameButton={'ยืนยันการซื้อ'}
                        >
                            <MenuShow item={menu}/>
                        </DialogLayout>
                    </>

        }
        </>
    );
}

export default Home;