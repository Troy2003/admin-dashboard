import React, { useMemo } from 'react';
import { themeSettings } from 'theme';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from 'scenes/dashboard';
import Layout from 'scenes/layout';
import Products from 'scenes/products';
import Customers from 'scenes/customers';

const App = () => {
  const mode = useSelector(state => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* ANY COMPONENT INSIDE ROUTE HAVE PARENT COMPONENT LAYOUT COMPONENT  */}
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
            <Route path='/customers' element={<Customers />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App