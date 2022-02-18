import React,{useState} from 'react'
import { 
    Toolbar
} from '@mui/material';
import DrawerLayout from './containers/drawer'
import AppBarLayout from './containers/appbar';
const Layout = (props) =>{
    const [anchorEl, setAnchorEl] = useState(false);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
    const [drawer,setDrawer] = useState(false)
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(false);
    };
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawer(open);
    };
    return(
        <>
            <AppBarLayout  
                onClick={toggleDrawer(true)} 
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                isMobileMenuOpen={mobileMoreAnchorEl}
            />
            <Toolbar />
            <DrawerLayout open={drawer} onClose={toggleDrawer(false)}/>
            {/* <Container>
                <Box sx={{ my: 2 }}>
                    {[...new Array(12)]
                        .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                                    )
                        .join('\n')}
                </Box>
            </Container> */}
        </>


    );
}
export default Layout;