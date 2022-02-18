import React from 'react'
import {BottomNavigation,BottomNavigationAction} from '@mui/material';

const Tabs = (props) =>{
    return(
            <BottomNavigation
                {...props}
            >
                <BottomNavigationAction label="ทั้งหมด" />
                <BottomNavigationAction label="ขนม" />
                <BottomNavigationAction label="เครื่องดื่ม"  />
                <BottomNavigationAction label="อาหาร"  />
                <BottomNavigationAction label="อื่นๆ"  />
            </BottomNavigation>            

    );
}
export default Tabs