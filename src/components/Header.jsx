import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'

const Header = ({ title }) => {
    const theme = useTheme();
    return (
        <Box>
            <Typography
                variant='h2'
                color={theme.palette.secondary.main}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default Header