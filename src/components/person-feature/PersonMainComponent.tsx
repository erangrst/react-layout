import { Box } from '@mui/material'
import GenericToolbarComponent from '../common-feature/GenericToolbarComponent'
import PersonTableComponent from './PersonTableComponent'

function PersonMainComponent() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <Box sx={{ width: '100%', height: 'fit-content' }}>
                <GenericToolbarComponent />
            </Box>

            <Box sx={{ flex: 1, minHeight: 0, width: '100%', p: 1 }}>
                <PersonTableComponent />
            </Box>
        </Box>
    )
}

export default PersonMainComponent
