import React from 'react'
import { Box, IconButton, Stack, Tooltip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import BreadOrderComponent from './BreadOrderComponent'
import PizzaOrderComponent from './PizzaOrderComponent'

function FoodExpandedComponent() {
    const [expanded, setExpanded] = React.useState<string | false>('bread-panel')
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                gap: 1,
                overflow: 'hidden',
            }}
        >
            {/* Icon Buttons Row - Fixed height, no grow/shrink */}
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    flex: '0 0 auto',
                    alignItems: 'center',
                    minHeight: 'fit-content',
                }}
            >
                <Tooltip title="Bread Orders">
                    <IconButton color="primary" aria-label="bread orders">
                        <BakeryDiningIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Pizza Orders">
                    <IconButton color="secondary" aria-label="pizza orders">
                        <LocalPizzaIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Food Overview">
                    <IconButton color="success" aria-label="food overview">
                        <RestaurantMenuIcon />
                    </IconButton>
                </Tooltip>
            </Stack>

            {/* Bread Component in Accordion - Fixed height, no grow/shrink */}
            <Accordion
                expanded={expanded === 'bread-panel'}
                onChange={() => setExpanded(expanded === 'bread-panel' ? false : 'bread-panel')}
                sx={{
                    flex: '0 0 auto',
                    minHeight: 'fit-content',
                    border: '3px solid yellow',
                    margin: 0,
                    '&:before': {
                        display: 'none',
                    },
                    '&.MuiAccordion-root': {
                        margin: 0,
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="bread-content"
                    id="bread-header"
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.03)',
                        minHeight: '48px',
                        height: '48px',
                        padding: '0 16px',
                    }}
                >
                    <span>Bread Orders</span>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: '0 !important',
                        margin: 0,
                        backgroundColor: 'background.paper',
                    }}
                >
                    <Box sx={{ width: '100%', overflow: 'auto' }}>
                        <BreadOrderComponent />
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Pizza Component in Accordion - Takes remaining space when expanded */}
            <Accordion
                expanded={expanded === 'pizza-panel'}
                onChange={() => setExpanded(expanded === 'pizza-panel' ? false : 'pizza-panel')}
                sx={{
                    flex: '1 1 auto',
                    minHeight: 0,
                    border: '3px solid lightblue',
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    '&:before': {
                        display: 'none',
                    },
                    '&.MuiAccordion-root': {
                        margin: 0,
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="pizza-content"
                    id="pizza-header"
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.03)',
                        minHeight: '48px',
                        height: '48px',
                        padding: '0 16px',
                        flex: '0 0 auto',
                    }}
                >
                    <span>Pizza Orders</span>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: '0 !important',
                        margin: 0,
                        backgroundColor: 'background.paper',
                        flex: '1 1 auto',
                        minHeight: 0,
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* sx={{ width: '100%', height: '100%', display: 'flex', border: '3px solid green', flexDirection: 'column', overflow: 'auto' }} */}
                    <Box >
                        <PizzaOrderComponent />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FoodExpandedComponent
