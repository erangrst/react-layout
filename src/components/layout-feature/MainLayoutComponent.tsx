import React from 'react'
import { Box } from '@mui/material'
import AppHeaderComponent from './AppHeaderComponent'
import AppMainComponent from './AppMainComponent'
import AppStatusComponent from './AppStatusComponent'

// function MainLayoutComponent({ children }: { children: React.ReactNode }) {
function MainLayoutComponent() {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.default',
                color: 'text.primary',
                border: '5px solid orange',
            }}
        >
            <AppHeaderComponent />

            <AppStatusComponent />

            <AppMainComponent></AppMainComponent>
        </Box >
    )
}

export default MainLayoutComponent
