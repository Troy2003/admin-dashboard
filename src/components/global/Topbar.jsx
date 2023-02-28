import React from 'react'
import Flexbetween from 'components/Flexbetween'
import { InputBase, IconButton, useTheme, useMediaQuery } from '@mui/material'
import { LightMode, DarkMode, Notifications, Settings, Person, Search, Menu as MenuIcon } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from 'state';

const Topbar = ({ setIsSidebarOpen }) => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch();
  const mode = useSelector(state => state.global.mode);
  const theme = useTheme();

  return (
    <Flexbetween
      padding={1}
      flexDirection={isNonMobile ? 'row' : 'column-reverse'}
      gap={isNonMobile ? undefined : 2}
    >

      <Flexbetween
        gap={1}
      >
        {isNonMobile && (
          <IconButton
            onClick={() => setIsSidebarOpen(state => !state)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Flexbetween
          gap={1}
          sx={{
            backgroundColor: theme.palette.background.alt,
            borderRadius: '1rem',
            padding: '0.2rem 1rem'
          }}
        >
          <InputBase
            placeholder='Search...'
          />
          <IconButton>
            <Search />
          </IconButton>
        </Flexbetween>
      </Flexbetween>

      <Flexbetween
        gap={2}
        width={isNonMobile ? undefined : '100%'}
      >
        {!isNonMobile && (
          <IconButton
            onClick={() => setIsSidebarOpen(state => !state)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <IconButton onClick={() => dispatch(changeMode())}>
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <Person />
        </IconButton>
      </Flexbetween>
    </Flexbetween>
  )
}

export default Topbar