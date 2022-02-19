/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useMemo,useEffect} from 'react'
import { 
    Toolbar
} from '@mui/material';
import DrawerLayout from './containers/drawer'
import AppBarLayout from './containers/appbar';
import { useMoneyContext } from '../../reducer/moneyReducer';
import {moneyAction} from './../../action/money.action'
import { DialogAddMoney } from './containers/dialogAddMoney';
import { DialogShowMoney } from './containers/dialogShowMoney';
const Layout = (props) =>{
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
    const [tricker,settricker] = useState(false);
    const [openprice,setopenprice] = useState(false)
    const [opencancle,setopencancle] = useState(false)
    const [drawer,setDrawer] = useState(false)
    const moneyContext = useMoneyContext()
    const {
        money,
        setmoney,
        onReset
    } = moneyContext
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(false);
    };
    const toggleDrawer = (openDrawer) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawer(openDrawer);
    };
    const onOpenPriceDialog = () =>{
        setopenprice(true);
    }
    const onClosePriceDialog = () =>{
        setopenprice(false);
    }
    const onCanclePrice = () =>{
        setopencancle(true);
    }
    const onCloseCanclePrice = () =>{
        setopencancle(false);
    }
    const AddMoney = async() =>{
        const status = await moneyAction.Add(money,totalValue)
        // { success: true, message: 'success' }
        if(status.data.success){
            await settricker(!tricker);
            await onReset();
            await onClosePriceDialog();
        }
    }
    const ResponceMoney = async() =>{
        const status = await moneyAction.ResCashBack()
        // { success: true, message: 'success' }
        if(status.data.success){
            await settricker(!tricker);
            await onReset();
            await onCloseCanclePrice();
        }
    }
    const onOpenCloseDialog = async() =>{
        setopencancle(false)
    }
    const getMoney = async() =>{
        let value = await moneyAction.Get();
        console.log('value:',value)
        setmoney(prevState => ({...prevState,price:value.data.price}))
    }
    useEffect(()=>{
        getMoney()
    },[tricker])
    const totalPrice = useMemo(() =>{
        return money.price;
    },[money.price]);
    const totalValue = useMemo(() =>{
        let total = 0
        if(money.thousand !== ''){
            total += 1000*(parseInt(money.thousand));
        }
        if(money.fivehundred !== ''){
            total += 500*(parseInt(money.fivehundred));
        }
        if(money.onehundred !== ''){
            total += 100*(parseInt(money.onehundred));
        }
        if(money.fifty !== ''){
            total += 50*(parseInt(money.fifty));
        }
        if(money.twenty !== ''){
            total += 20*(parseInt(money.twenty))
        }
        if(money.ten !== ''){
            total += 10*(parseInt(money.ten))
        }
        if(money.five !== ''){
            total += 5*(parseInt(money.five))
        }
        if(money.one !== ''){
            total += parseInt(money.one)
        }
        // setmoney({...prevState,price:total});
        return total
    },[money.fifty, money.five, money.fivehundred, money.one, money.onehundred, money.ten, money.thousand, money.twenty]);
    return(
        <>
            <AppBarLayout  
                price={totalPrice}
                onOpenPrice={onOpenPriceDialog}
                onClick={toggleDrawer(true)} 
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                isMobileMenuOpen={mobileMoreAnchorEl}
                onCanclePrice={onCanclePrice}
            />
            <Toolbar />
            <DrawerLayout open={drawer} onClose={toggleDrawer(false)}/>
            <DialogAddMoney 
                title={'เติมเงิน'}
                openprice={openprice}
                AddMoney={AddMoney}
                onClosePriceDialog={onClosePriceDialog}
            />
            <DialogShowMoney 
                title={'ถอนเงิน'}
                openprice={opencancle}
                AddMoney={ResponceMoney}
                onClosePriceDialog={onCloseCanclePrice}
            />
        </>


    );
}
export default Layout;