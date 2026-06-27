import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

function AppHeaderComponent() {
    return (
        <Box
            component="header"
            sx={{
                height: '12vh',
                border: '5px solid red',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                bgcolor: 'background.paper',
            }}
        >
            <Stack spacing={1}>
                <Typography variant="h1" component="h1">
                    My Dark Mode App
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    General application information and status summary.
                </Typography>
            </Stack>
            <Typography variant="caption" color="text.secondary">
                Updated: June 21, 2026
            </Typography>
        </Box>
    )
}

export default AppHeaderComponent
