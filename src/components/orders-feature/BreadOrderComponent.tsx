import { Box } from '@mui/material'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { breadOrders } from '../../data/bread-order.data'
import { BreadOrder } from '../../models/bread-order.model'

const columns: GridColDef<BreadOrder>[] = [
    { field: 'id', headerName: 'ID', flex: 0.8, minWidth: 90 },
    { field: 'customerName', headerName: 'Customer Name', flex: 1.2, minWidth: 160 },
    { field: 'breadType', headerName: 'Bread Type', flex: 1, minWidth: 140 },
    { field: 'quantity', headerName: 'Quantity', flex: 0.7, minWidth: 100, type: 'number' },
    { field: 'weight', headerName: 'Weight (g)', flex: 0.8, minWidth: 110, type: 'number' },
    { field: 'price', headerName: 'Price', flex: 0.8, minWidth: 100, type: 'number' },
    { field: 'status', headerName: 'Status', flex: 0.9, minWidth: 130 },
]

function BreadOrderComponent() {
    return (
        <Box>
            <DataGrid
                rows={breadOrders}
                columns={columns}
                className="BreadOrder"
                hideFooter
                hideFooterSelectedRowCount
                pageSizeOptions={[]}
                disableRowSelectionOnClick
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

export default BreadOrderComponent
