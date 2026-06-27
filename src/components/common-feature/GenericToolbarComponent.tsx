import { Box, Button, Stack, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import SaveIcon from '@mui/icons-material/Save'

function GenericToolbarComponent() {
    return (
        <Toolbar
            disableGutters
            sx={{
                width: '100%',
                minHeight: 'fit-content',
                bgcolor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider',
                px: 2,
                py: 1,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="h4">
                    Person Actions
                </Typography>

                <Stack direction="row" spacing={1}>
                    <Button variant="outlined" startIcon={<AddIcon />}>
                        Add
                    </Button>
                    <Button variant="outlined" startIcon={<FileUploadIcon />}>
                        Export
                    </Button>
                    <Button variant="contained" startIcon={<SaveIcon />}>
                        Save
                    </Button>
                </Stack>
            </Box>
        </Toolbar>
    )
}

export default GenericToolbarComponent
