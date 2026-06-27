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
            {/* Left Side Bar */}
            <Box
                component="aside"
                sx={{ width: 'fit-content', minWidth: '4rem', height: '100%', position: 'relative', overflow: 'visible', border: '5px solid lightblue', bgcolor: 'background.paper', display: 'flex', alignItems: 'stretch', }}
            >
                <SideBarComponent />
            </Box>

            {/* Main Content Area */}
            <Box
                component="section"
                sx={{
                    flex: 1,
                    minHeight: 0,
                    border: '5px solid yellow',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0rem',
                }}
            >
                <Tabs
                    value={tabIndex}
                    onChange={handleTabChange}
                    sx={{ border: '1px solid lightgreen', minHeight: '36px', height: '36px', flex: '0 0 auto' }}
                >
                    <Tab label="Tree" sx={{ padding: '4px 8px', minHeight: '36px', height: '36px' }} />
                    <Tab label="Table A" sx={{ padding: '4px 8px', minHeight: '36px', height: '36px' }} />
                    <Tab label="Table B" sx={{ padding: '4px 8px', minHeight: '36px', height: '36px' }} />
                </Tabs>

                <Box role="tabpanel" sx={{ margin: 0, border: '5px solid cadetblue', flex: 1, minHeight: 0, width: '100%', overflow: 'auto' }}>
                    <RenderPanel index={tabIndex} />
                </Box>
            </Box>
        </Box>
    )
}

export default AppMainComponent
