import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'

import { ChevronLeft, Home, ShoppingCart, Groups2, Receipt, Public, PointOfSale, Today, CalendarMonth, AdminPanelSettings, TrendingUp, PieChart } from '@mui/icons-material';
import Flexbetween from 'components/Flexbetween';

const Item = ({ title, icon, to, active, setActive }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const lcTitle = title.toLowerCase();

  if (!icon) {
    return (
      <Typography
        color={theme.palette.primary.main}
        padding={2}
        variant='h4'
        fontWeight='bold'
      >
        {title}
      </Typography>
    )
  }

  return (
    <ListItem key={title} disablePadding sx={{ marginY: 0.5 }}>
      <ListItemButton
        onClick={() => {
          navigate(to);
          setActive(lcTitle);
        }}
        sx={{ color: active === lcTitle ? theme.palette.secondary.main : null }}
      >
        <ListItemIcon
          sx={{ color: active === lcTitle ? theme.palette.secondary.main : null }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={title}>

        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}


const Sidebar = ({ isNonMobile, drawerWidth, isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const [active, setActive] = useState('dashboard');
  const { pathname } = useLocation();

  useEffect(() => {
    setActive(pathname.slice(1));
  }, [pathname]);

  return (
    <Box>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant='permanent'
          anchor='left'
          sx={{
            width: drawerWidth,
            "& .MuiPaper-root": {
              backgroundColor: theme.palette.background.alt,
              width: drawerWidth,
              borderWidth: isNonMobile ? 0 : '2px'
            }
          }}
        >
          <Box
            width='100%'
            padding={1}
          >
            <Flexbetween
              paddingX={2}
            >
              <Typography
                color={theme.palette.secondary.main}
                variant='h3'
                fontWeight='bold'
                textAlign={isNonMobile ? 'center' : 'start'}
                width="100%"
                fontSize='clamp(1rem , 2rem , 2.05rem)'
                paddingY={1}
              >
                Cuper
              </Typography>

              {!isNonMobile && (
                <IconButton onClick={() => setIsSidebarOpen(false)}>
                  <ChevronLeft />
                </IconButton>
              )}
            </Flexbetween>
            <List
            >
              <Item
                title='Dashboard'
                icon={<Home />}
                to='/dashboard'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Client Facing'
                icon={null}
              />

              <Item
                title='Products'
                icon={<ShoppingCart />}
                to='/products'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Customers'
                icon={<Groups2 />}
                to='/customers'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Transactions'
                icon={<Receipt />}
                to='/transactions'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Geography'
                icon={<Public />}
                to='/geography'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Sales'
                icon={null}
              />

              <Item
                title='Overview'
                icon={<PointOfSale />}
                to='/overview'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Daily'
                icon={<Today />}
                to='/daily'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Monthly'
                icon={<CalendarMonth />}
                to='/monthly'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Breakdown'
                icon={<PieChart />}
                to='/daily'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Management'
                icon={null}
              />

              <Item
                title='Admin'
                icon={<AdminPanelSettings />}
                to='/admin'
                active={active}
                setActive={setActive}
              />

              <Item
                title='Performance'
                icon={<TrendingUp />}
                to='/performance'
                active={active}
                setActive={setActive}
              />
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar