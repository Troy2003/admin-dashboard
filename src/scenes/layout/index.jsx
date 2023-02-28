import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, useMediaQuery } from '@mui/material'
import Topbar from 'components/global/Topbar'
import Sidebar from 'components/global/Sidebar'

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width : 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box display={isNonMobile ? 'flex' : 'block'} height='100%' width='100%'>
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box
        flex={1}
        component='nav'
      >
        <Topbar
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout