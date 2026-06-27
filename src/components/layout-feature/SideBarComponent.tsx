import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

function SideBarComponent() {
    return (
        <Accordion
            sx={{
                position: 'relative',
                overflow: 'visible',
                bgcolor: 'background.paper',
                width: 'fit-content',
                height: '100%',
                '& .MuiAccordionSummary-root': {
                    px: 1,
                    py: 0.5,
                    display: 'inline-flex',
                    minHeight: '48px',
                    height: '48px',
                },
                '& .MuiAccordionDetails-root': {
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    height: '100%',
                    width: 'max-content',
                    maxWidth: 'min(75vw, 80rem)',
                    overflowY: 'auto',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    zIndex: 10,
                },
            }}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
            </AccordionSummary>
            <AccordionDetails sx={{ border: '3px solid red' }}>
                <Typography sx={{ fontSize: '1.4rem' }}>
                    This accordion expands to the right and overlays the component area without pushing it.
                </Typography>
                <Typography sx={{ fontSize: '1.4rem' }}>
                    If the content becomes taller than the available height, this side will scroll independently.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default SideBarComponent
