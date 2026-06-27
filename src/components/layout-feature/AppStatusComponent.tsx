import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart'
import BuildIcon from '@mui/icons-material/Build'
import InfoIcon from '@mui/icons-material/Info'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material'

const indicators = [
    { label: 'Status', icon: <InfoIcon /> },
    { label: 'Metrics', icon: <BarChartIcon /> },
    { label: 'Alerts', icon: <NotificationsIcon /> },
    { label: 'Tools', icon: <BuildIcon /> },
]

function AppStatusComponent() {
    return (
        <Box
            component="section"
            sx={{
                padding: '0',
                border: '5px solid green',
                display: 'flex',
                flex: '0 0 2vh',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 2,
                bgcolor: 'background.paper',
            }}
        >
            <Stack direction="row" spacing={1}>
                <Typography variant="subtitle1">Toolbar</Typography>
                <Typography variant="body2" color="text.secondary">
                    Quick actions and indicators.
                </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
                {indicators.map((indicator) => (
                    <Tooltip key={indicator.label} title={indicator.label} arrow>
                        <IconButton color="primary" size="large" sx={{ padding: '1.4rem 1rem' }}>
                            {indicator.icon}
                        </IconButton>
                    </Tooltip>
                ))}
            </Stack>
        </Box>
    )
}

export default AppStatusComponent
