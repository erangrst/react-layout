import React from 'react'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import SideBarComponent from './SideBarComponent'
import TreeComponent from './tree.component'

// function AppMainComponent({ children }: { children: React.ReactNode }) {
function RenderPanel({ index }: { index: number }) {
    switch (index) {
        case 0:
            return (
                <Box sx={{ p: 1 }}>
                    <TreeComponent />
                </Box>
            )
        case 1:
            return (
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6">Table A</Typography>
                    <Box sx={{ mt: 1 }}>This is placeholder content for Table A.</Box>
                </Box>
            )
        case 2:
            return (
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6">Table B</Typography>
                    <Box sx={{ mt: 1 }}>This is placeholder content for Table B.</Box>
                </Box>
            )
        default:
            return null
    }
}

function AppMainComponent() {
    const [tabIndex, setTabIndex] = React.useState(0)

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue)
    }

    return (
        <Box
            component="main"
            sx={{
                flex: 1,
                minHeight: 0,
                display: 'flex',
                gap: 2,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    width: 'fit-content',
                    minWidth: '4rem',
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                    border: '5px solid lightblue',
                    bgcolor: 'background.paper',

                    display: 'flex',
                    alignItems: 'stretch',
                }}
            >
                <SideBarComponent />
            </Box>

            <Box
                component="section"
                sx={{
                    flex: 1,
                    minHeight: 0,
                    border: '5px solid yellow',
                    p: 3,
                    bgcolor: 'background.paper',
                    overflowY: 'auto',
                }}
            >
                <Tabs value={tabIndex} onChange={handleTabChange} aria-label="Main tabs">
                    <Tab label="Tree" id="tab-0" aria-controls="tabpanel-0" />
                    <Tab label="Table A" id="tab-1" aria-controls="tabpanel-1" />
                    <Tab label="Table B" id="tab-2" aria-controls="tabpanel-2" />
                </Tabs>

                <Box role="tabpanel" id={`tabpanel-${tabIndex}`} aria-labelledby={`tab-${tabIndex}`} sx={{ mt: 2 }}>
                    <RenderPanel index={tabIndex} />
                </Box>
            </Box>
        </Box>
    )
}

export default AppMainComponent
