import React from 'react'
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Box, 
    IconButton, 
    Badge,
    Menu,
    MenuItem,
    Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
const AppBarLayout = (props) =>{
    const {
        onClick,
        price=0,
        onOpenPrice,
        handleMobileMenuOpen,
        handleMobileMenuClose,
        isMobileMenuOpen,
        onCanclePrice
    } = props;
    const renderMobileMenu = (
        <Menu
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Typography sx={{ display: { md: 'none' } }} variant="overline" component="div">
                {'จำนวนเงิน '+price+' บาท'}
            </Typography>
            <MenuItem>
                <Box sx={{ display: { md: 'none' } }}>
                    <Button
                        size="small"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        variant="outlined"
                        onClick={onOpenPrice}
                    >
                        <AddIcon />
                        {'เติมเงิน'}
                    </Button>
                </Box>
            </MenuItem>        
            <MenuItem>
                <Box sx={{ display: { md: 'none' } }}>
                    <Button
                        size="small"
                        aria-label="show 17 new notifications"
                        color="error"
                        variant="outlined"
                        onClick={onCanclePrice}
                    >
                        <AddIcon />
                        {'ยกเลิก'}
                    </Button>
                </Box>
            </MenuItem>        
        </Menu>
    );
    return(
        <>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={onClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Vending Machine
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography sx={{ display: { xs: 'none', md: 'flex' },paddingRight:'10px' }} variant="overline" component="div">
                        {'จำนวนเงิน '+price+' บาท'}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            size="small"
                            aria-label="show 17 new notifications"
                            color="primary"
                            variant="contained"
                            onClick={onOpenPrice}
                        >
                            <AddIcon />
                            {'เติมเงิน'}
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
                        <Button
                            size="small"
                            aria-label="show 17 new notifications"
                            color="error"
                            variant="contained"
                            onClick={onCanclePrice}
                        >
                            <HighlightOffRoundedIcon />
                            {'ยกเลิก'}
                        </Button>
                    </Box>   
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}   

        </>
    );
}
export default AppBarLayout;