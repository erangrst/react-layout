import { Box } from '@mui/material'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { PersonModel } from '../../models/person.model'
import { personsRows } from '../../data/person.data'

const columns: GridColDef<PersonModel>[] = [
    { field: 'id', headerName: 'ID', flex: 0.6, minWidth: 90 },
    { field: 'fullName', headerName: 'Full Name', flex: 1, minWidth: 160 },
    { field: 'address', headerName: 'Address', flex: 1.2, minWidth: 180 },
    { field: 'phone', headerName: 'Phone', flex: 0.8, minWidth: 120 },
    { field: 'email', headerName: 'Email', flex: 1.2, minWidth: 180 },
    { field: 'wife', headerName: 'Wife', type: 'boolean', flex: 0.6, minWidth: 80, },
    { field: 'childrenCount', headerName: 'Children', flex: 0.7, minWidth: 90, type: 'number' },
]

function PersonTableComponent() {
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={personsRows}
                columns={columns}
                // pagination={false}
                hideFooter
                hideFooterSelectedRowCount
                pageSizeOptions={[]}
                // checkboxSelection
                // disableRowSelectionOnClick
                sx={{
                    border: 0,
                    height: '100%',
                    '& .MuiDataGrid-columnHeaders': {
                        bgcolor: 'background.default',
                    },
                }}
            />
        </Box>
    )
}

export default PersonTableComponent
